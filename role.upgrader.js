var helper = require('helper');
var creep_helper = require('creep_helper');
var constants = require('constants');

var role_upgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let room1 = Game.spawns['Spawn1'].room;
        let controller = room1.controller;
        let closest_source = creep.pos.findClosestByRange(FIND_SOURCES);

        helper.set_creep_state(creep, constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            creep_helper.set_path_from_creep_to(creep, closest_source);
            
            if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE) {
                creep_helper.move_or_clear_path(creep);
            } else {
                creep.memory.path = undefined;
            }

        } else {
            creep_helper.set_path_from_creep_to(creep, controller);

            if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
                creep_helper.move_or_clear_path(creep);
            } else {
                creep.memory.path = undefined;
            }
        }

    },

};


module.exports = role_upgrader;
