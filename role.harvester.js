var roleHarvester = {

  /** @param {Creep} creep **/
  run: function(creep) {
    if(creep.carry.energy < creep.carryCapacity) {
      var sources = creep.room.find(FIND_SOURCES);
      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }

    } else {
      let spawn = Game.spawns['Spawn1'];
      let room1 = spawn.room;
      if(room1.controller.level < 2 && creep.transfer(room1.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(room1.controller);
      }
      else if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns['Spawn1']);
      }
    }
  },

};


module.exports = roleHarvester;
