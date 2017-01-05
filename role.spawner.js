var _ = require('lodash');

var constants = require('constants');

var roleSpawner = {

  spawn: function() {
    let spawn1 = Game.spawns['Spawn1'];
    // console.log( _.filter(Game.creeps,{ memory: { role: 'harvester' }}));
    
    

    if(spawn1.energy > 299) {

    	let harvester_count = 0;
    	let upgrader_count = 0;

	    for(var creep_name in Game.creeps){
	        
	        if(constants.harvester_name == Game.creeps[creep_name].memory.role)
	          harvester_count++;
	        
	        if(constants.upgrader_name == Game.creeps[creep_name].memory.role)
	          upgrader_count++;


	    }

        if(harvester_count < 5) {
        	spawn1.createCreep( constants.harvester_build, null, { role: constants.harvester_name} );
       	} else if (upgrader_count < 2) {
       		spawn1.createCreep( constants.upgrader_build, null, { role: constants.upgrader_name} );
       	}
    }

  },

}

module.exports = roleSpawner;



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
