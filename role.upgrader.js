var role_upgrader = {

  /** @param {Creep} creep **/
  run: function(creep) {
    
    let room1 = Game.spawns['Spawn1'].room;
    let controller = room1.controller;
    let sources = creep.room.find(FIND_SOURCES);
    let first_source = sources[0];
    

    if(creep.pos.getRangeTo(controller) < 4 && creep.carry.energy > 0) {
      creep.upgradeController(controller);
    } 
    else if (creep.carry.energy < 50 && creep.pos.getRangeTo(first_source) > 1) {
      creep.moveTo(first_source);
    } 
    else if (creep.carry.energy < 50) {
      creep.harvest(first_source);
    } else  {
      creep.moveTo(controller);
    }


    // creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)


    // if(creep.carry.energy == creep.carryCapacity) {
    //   let room1 = Game.spawns['Spawn1'].room;

    //   if(creep.upgradeController(room1.controller) == ERR_NOT_IN_RANGE) {
    //     creep.moveTo(room1.controller);
    //   }

    // } else {
    //   var sources = creep.room.find(FIND_SOURCES);
    //   if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    //     creep.moveTo(sources[0]);
    //   }
    // }


    // if(creep.carry.energy < creep.carryCapacity) {
    //   var sources = creep.room.find(FIND_SOURCES);
    //   if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    //     creep.moveTo(sources[0]);
    //   }

    // } else {
    //   let spawn = Game.spawns['Spawn1'];
    //   let room1 = spawn.room;
    //   console.log(creep.transfer(room1.controller, RESOURCE_ENERGY));
    //   if(creep.transfer(room1.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    //     creep.moveTo(room1.controller);
    //   }
    //   // else if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    //   //   creep.moveTo(Game.spawns['Spawn1']);
    //   // }
    // }
  },

};


module.exports = role_upgrader;
