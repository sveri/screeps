const profiler = require('screeps-profiler');

var creep_helper = require('creep_helper');

var config = require('config');
var constants = require('constants');
var helper = require('helper');

var room_constructor = require('room.constructions');



var roleHarvester = require('role.harvester');
var roleSpawner = require('role.spawner');
var role_upgrader = require('role.upgrader');
var roles_builder = require('role.builder');



loop = function() {

    for (var room in Game.rooms) {

        config.init_room(room);

        if (Memory[room].Constructions.Extensions < Memory[room].max.constructions.extensions) {
            room_constructor.build_extensions(room);
        }
    }


    roleSpawner.spawn();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (constants.harvester_name == creep.memory.role)
            roleHarvester.run(creep);

        if (constants.upgrader_name == creep.memory.role)
            role_upgrader.run(creep);

        if (constants.builder_name == creep.memory.role)
            roles_builder.run(creep);

        if (creep.ticksToLive == 1) {
            creep.suicide();
            Memory.creep = undefined;

        }
    }

    if (Game.time % 10 == 0) {
        helper.assign_roles();
    }
}

// loop();


profiler.enable();

module.exports.loop = function() {
    profiler.wrap(function() {
        loop();
    });
}