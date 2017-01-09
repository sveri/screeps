var _ = require('lodash');
var constants = require('constants');

var roleSpawner = {

    spawn: function() {
        let spawn1 = Game.spawns['Spawn1']
        let room = spawn1.room;



        if (room.energyAvailable > 299) {

            let harvester_count = 0;
            let upgrader_count = 0;
            let builder_count = 0;

            for (var creep_name in Game.creeps) {

                if (constants.harvester_name == Game.creeps[creep_name].memory.role)
                    harvester_count++;

                if (constants.upgrader_name == Game.creeps[creep_name].memory.role)
                    upgrader_count++;

                if (constants.builder_name == Game.creeps[creep_name].memory.role)
                    builder_count++;
            }


            if (harvester_count < constants.max.simple_harvester) {
                spawn1.createCreep(constants.harvester_build, null, { role: constants.harvester_name });
            } else if (upgrader_count < constants.max.simple_upgrader) {
                spawn1.createCreep(constants.upgrader_build, null, { role: constants.upgrader_name });
            } else if (builder_count < constants.max.simple_builder) {
                spawn1.createCreep(constants.builder_build, null, { role: constants.builder_name });
            }
        }

    },

}

module.exports = roleSpawner;


// console.log( _.filter(Game.creeps,{ memory: { role: 'harvester' }}));


// export let counter = 3;
// export function incCounter() {
//     counter++;
// }
//
// //------ main1.js ------
// import { counter, incCounter } from './lib';
//
// // The imported value `counter` is live
// console.log(counter); // 3
// incCounter();
// console.log(counter); // 4
//
// // The imported value can’t be changed
// counter++; // TypeError
