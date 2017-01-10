var creep_helper = require('creep_helper');

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            let closest_source = sources[0];

            creep_helper.set_path_from_creep_to(creep, closest_source);


            if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE) {
                // creep.moveTo(sources[0], {reusePath: 100});
                creep_helper.move_or_clear_path(creep);
            } else {
                creep.memory.path = undefined;
            }

        } else {
            let spawn1 = Game.spawns['Spawn1'];
            
            if(spawn1.energy < spawn1.energyCapacity) {
                if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns['Spawn1'], {reusePath: 100});
                }    
            } else {
                let room = spawn1.room;
                let extensions = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});

                var did_move = false;
                for(var i in extensions){
                    let ext = extensions[i]
                    if (ext.energy < ext.energyCapacity){
                        if (creep.transfer(ext, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(ext, {reusePath: 100});
                            did_move = true;
                        }
                    }
                }

                if(!did_move) {
                    creep.moveTo(spawn1, {reusePath: 100});
                }
            }
            
        }
    },

};


module.exports = roleHarvester;
