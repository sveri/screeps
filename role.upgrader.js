var helper = require('helper');
var constants = require('constants');

var role_upgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let room1 = Game.spawns['Spawn1'].room;
        let controller = room1.controller;
        let closest_source = creep.pos.findClosestByRange(FIND_SOURCES);

        helper.set_creep_state(creep, constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closest_source);
            }
        } else if(creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(controller);
        }

    },

};


module.exports = role_upgrader;
