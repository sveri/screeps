var constants = {
  harvester_name: 'simple_harvester',
  harvester_build: [WORK, CARRY, CARRY, MOVE, MOVE],

  upgrader_name: 'simple_upgrader',
  upgrader_build: [WORK, CARRY, CARRY, MOVE, MOVE],

  builder_name: 'simple_builder',
  builder_build: [WORK, WORK, CARRY, MOVE],

  max: {
  	simple_harvester: 4,
  	simple_upgrader: 2,
  	simple_builder: 2,
  }
}


module.exports = constants;
