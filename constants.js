var constants = {

  harvester_name: 'simple_harvester',
  harvester_build: [WORK, CARRY, CARRY, MOVE, MOVE],

  upgrader_name: 'simple_upgrader',
  upgrader_build: [WORK, CARRY, CARRY, MOVE, MOVE],

  builder_name: 'simple_builder',
  builder_build: [WORK, CARRY, CARRY, CARRY, MOVE],

  states : {
    working: 'working',
    harvesting: 'harvesting',
    waiting: 'waiting'
  }
}


module.exports = constants;
