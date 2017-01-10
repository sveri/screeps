var _ = require('lodash');
var constants = require('constants');
var helper = require('helper');

var role_builder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        helper.set_creep_state(creep, constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {reusePath: 100});
            }

        } else {
            let construction_site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(construction_site) {
                if(creep.build(construction_site) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(construction_site, {reusePath: 100});
                }
            }
        }
    },

}

module.exports = role_builder;

