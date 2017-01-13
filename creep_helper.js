const constants = require('constants')

Creep.prototype.set_path_from_creep_to = function(target) {
    if (!this.memory.path) {
        this.memory.path = this.room.findPath(this.pos, target.pos);
        console.log("findPath: " + this)
    }
}

Creep.prototype.move_or_clear_path = function(target) {
    this.set_path_from_creep_to(target);


    let move_result = this.moveByPath(this.memory.path)

    if(move_result == ERR_NOT_FOUND
        || move_result == ERR_BUSY
        || move_result == ERR_NOT_OWNER
        || move_result == ERR_INVALID_ARGS
        || move_result == ERR_NO_BODYPART) {
        this.memory.path = undefined;
        console.log("cleaning path because of bad move result")
    } 

    let last_pos = this.memory.path[this.memory.path.length - 1]

    if(this.pos.inRangeTo(last_pos.x, last_pos.y, 1) && this.memory.action != constants.states.waiting) {
        this.memory.path = undefined
        console.log("cleaning path cause of inRangeTo: " + this.name)
    }
}


Creep.prototype.harvest_closest_resource = function() {

    let closest_source = this.pos.findClosestByRange(FIND_SOURCES);

    let harvest_result = this.harvest(closest_source)

    if (harvest_result == ERR_NOT_IN_RANGE) {
        this.move_or_clear_path(closest_source);
    } else if(harvest_result == OK) {
        this.memory.path = undefined
    }
}

Creep.prototype.set_creep_state = function(action_when_full_energy, action_when_empty_energy) {

    if (this.carry.energy == this.carryCapacity) {
        this.memory.action = action_when_full_energy;
    } else if (this.carry.energy == 0) {
        this.memory.action = action_when_empty_energy;
    }


}
