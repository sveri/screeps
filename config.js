var config = {

	/** @param {Room} room **/
	init_room: function(room) {
		if(Memory[room] === undefined) {

			Memory[room] = {}
			Memory[room].Constructions = {};
			Memory[room].Constructions.Extensions = 0;

			Memory[room].max = {};
			Memory[room].max.simple_harvester = 4;
			Memory[room].max.simple_upgrader = 2;
			Memory[room].max.simple_builder = 2;

			Memory[room].max.constructions = {};
			Memory[room].max.constructions.extensions = 3;


			console.log("Config for Room: " + room + " initialized");

		}
	}

}

module.exports = config;