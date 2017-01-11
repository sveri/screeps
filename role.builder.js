var _ = require('lodash');
var constants = require('constants');

var role_builder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        creep.set_creep_state(constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.move_or_clear_path(sources[0]);
            }

        } else {
            let construction_site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(construction_site) {
                if(creep.build(construction_site) == ERR_NOT_IN_RANGE) {
                    creep.move_or_clear_path(construction_site);
                }
            }
        }
    },

}

module.exports = role_builder;

