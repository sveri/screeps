var creep_helper = {

    set_path_from_creep_to: function(creep, target) {
        if (!creep.memory.path) {
            creep.memory.path = creep.room.findPath(creep.pos, target.pos);
        }
    },

    move_or_clear_path: function(creep) {
        if (creep.moveByPath(creep.memory.path) != OK) {
            creep.memory.path = undefined;
        }
    }

}


module.exports = creep_helper;
