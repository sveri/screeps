var constants = require('constants');

var helper = {
	assign_roles: function(){
		for(var room in Game.rooms) {
	        
	        // turn the builders to harvesters
	        if(Game.rooms[room].find(FIND_CONSTRUCTION_SITES).length == 0) {
	            let builder_creeps = helper.get_creeps_by_type(constants.builder_name);
	            let number_builder_creeps = builder_creeps.length;

	            if(number_builder_creeps > 0) {
	            	
	            	Memory[room].max.simple_harvester = 6;
	            	Memory[room].max.simple_builder = 0;

	            	builder_creeps.forEach(function(creep) {creep.memory.role = constants.harvester_name});
	            }
	            
	        } else {
				let builder_creeps = helper.get_creeps_by_type(constants.builder_name);
				
				if(builder_creeps.length < 2){
	            	Memory[room].max.simple_harvester = 4;
	            	Memory[room].max.simple_builder = 2;	

	            	var counter = 0;
	            	let harvester_creeps = helper.get_creeps_by_type(constants.harvester_name);
	            	if(harvester_creeps.length > 3) {
	            		while(counter < 2){
							harvester_creeps[counter].memory.role = constants.builder_name;
	        				counter++;
		            	}
		            }
				}
	        }
	    }
	},


	get_creeps_by_type: function(creep_type) {
		var ret_list = [];
		for(var creep_name in Game.creeps) {
			var creep = Game.creeps[creep_name]
			if(creep.memory.role == creep_type) {
				ret_list.push(creep);
			}
		}

		return ret_list;
	}
}

module.exports = helper;