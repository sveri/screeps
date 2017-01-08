var helper = {

	set_creep_state: function(creep, action_when_full_energy, action_when_empty_energy) {

		if(creep.carry.energy == creep.carryCapacity){
            creep.memory.action = action_when_full_energy;
        } else if (creep.carry.energy == 0) {
            creep.memory.action = action_when_empty_energy;
        }
	}
}

module.exports = helper;