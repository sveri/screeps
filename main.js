var roleHarvester = require('role.harvester');
var roleSpawner = require('role.spawner');
var role_upgrader = require('role.upgrader');
var constants = require('constants');

loop = function() {


    roleSpawner.spawn();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (constants.harvester_name == creep.memory.role)
            roleHarvester.run(creep);

        if (constants.upgrader_name == creep.memory.role)
            role_upgrader.run(creep);

    }
}

loop();
