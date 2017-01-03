var roleSpawner = {

  spawn: function() {
    let spawn1 = Game.spawns['Spawn1'];
    if(spawn1.energy == 300) {
        spawn1.createCreep( [WORK, CARRY, MOVE] );
    }

  }

}

module.exports = roleSpawner;
