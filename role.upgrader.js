var helper = require('helper');
var constants = require('constants');

var role_upgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        helper.set_creep_state(creep, constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            creep.harvest_closest_resource()
            // let closest_source = creep.pos.findClosestByRange(FIND_SOURCES);
            
            // //creep_helper.set_path_from_creep_to(creep, closest_source);
            
            // if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE) {
            //     creep.move_or_clear_path(closest_source);
            // } else {
            //     creep.memory.path = undefined;
            // }

        } else {
            let controller = Game.spawns['Spawn1'].room.controller;

            //creep_helper.set_path_from_creep_to(creep, controller);

            if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep.move_or_clear_path(controller);
            } else {
                creep.memory.path = undefined;
            }
        }

    },

};


module.exports = role_upgrader;
