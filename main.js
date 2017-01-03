var roleHarvester = require('role.harvester');
var roleSpawner = require('role.spawner');

loop = function () {

    roleSpawner.spawn();
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}

loop();
