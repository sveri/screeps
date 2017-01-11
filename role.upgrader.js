var constants = require('constants');

var role_upgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        creep.set_creep_state(constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            creep.harvest_closest_resource()
        } else {
            let controller = Game.spawns['Spawn1'].room.controller;

            if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep.move_or_clear_path(controller);
            } 
        }

    },

};


module.exports = role_upgrader;
