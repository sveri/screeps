var constants = require('constants');


var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        creep.set_creep_state(constants.states.working, constants.states.harvesting);

        if (creep.memory.action == constants.states.harvesting) {
            creep.harvest_closest_resource()
        } else {
            let spawn1 = Game.spawns['Spawn1'];
            
            if(spawn1.energy < spawn1.energyCapacity) {
                if (creep.transfer(spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.move_or_clear_path(spawn1);
                }    
            } else {
                let extensions = spawn1.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});
                let did_move = false;

                for(var i in extensions){
                    let ext = extensions[i]

                    if (ext.energy < ext.energyCapacity){
                        if (creep.transfer(ext, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.move_or_clear_path(ext);

                            creep.memory.action = constants.states.working
                            did_move = true;
                        }
                    }
                }

                if(!did_move) {
                    creep.memory.action = constants.states.waiting
                    creep.move_or_clear_path(spawn1);
                }
            }
            
        }
    },

};


module.exports = roleHarvester;
