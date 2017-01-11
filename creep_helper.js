var creep_helper = {

    set_path_from_creep_to: function(creep, target) {
        if (!creep.memory.path) {
            creep.memory.path = creep.room.findPath(creep.pos, target.pos);
        }
    },

    move_or_clear_path: function(creep, target) {
        creep_helper.set_path_from_creep_to(creep, target);

        if (creep.moveByPath(creep.memory.path) != OK) {
            creep.memory.path = undefined;
        }
    }

}


module.exports = creep_helper;


Creep.prototype.move_or_clear_path = function(target) {
    creep_helper.set_path_from_creep_to(this, target);

    if (this.moveByPath(this.memory.path) != OK) {
        this.memory.path = undefined;
    }
}

Creep.prototype.harvest_closest_resource = function() {

    let closest_source = this.pos.findClosestByRange(FIND_SOURCES);

    if (this.harvest(closest_source) == ERR_NOT_IN_RANGE) {
        this.move_or_clear_path(closest_source);
    } else {
        this.memory.path = undefined;
    }
}
