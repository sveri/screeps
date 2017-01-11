Creep.prototype.set_path_from_creep_to = function(target) {
    if (!this.memory.path) {
        this.memory.path = this.room.findPath(this.pos, target.pos);
    }
}

Creep.prototype.move_or_clear_path = function(target) {
    this.set_path_from_creep_to(target);

    if (this.moveByPath(this.memory.path) != OK) {
        this.memory.path = undefined;
    }
}

Creep.prototype.harvest_closest_resource = function() {

    let closest_source = this.pos.findClosestByRange(FIND_SOURCES);

    if (this.harvest(closest_source) == ERR_NOT_IN_RANGE) {
        this.move_or_clear_path(closest_source);
    }
}
