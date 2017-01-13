var config = {

	/** @param {Room} room **/
	init_room: function(room) {
		if(Memory[room.name] === undefined) {

			Memory[room.name] = {}
			Memory[room.name].Constructions = {};
			Memory[room.name].Constructions.Extensions = 0;

			Memory[room.name].max = {};
			Memory[room.name].max.simple_harvester = 4;
			Memory[room.name].max.simple_upgrader = 2;
			Memory[room.name].max.simple_builder = 2;


			console.log("Config for Room: " + room + " initialized");

		}
	}

}

module.exports = config;