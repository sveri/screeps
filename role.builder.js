var _ = require('lodash');
var constants = require('constants');

var role_builder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }

        } else {
            let construction_site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if(construction_site) {
                if(creep.build(construction_site) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(construction_site);
                }
            }
        }
    },

}

module.exports = role_builder;

