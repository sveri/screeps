var config = {

	init: function() {
		if(Memory.Constructions === undefined) {
			Memory.Constructions = {};



			console.log("Config initialized");
		}

	},

	/** @param {Room} room **/
	init_room: function(room) {
		if(Memory.room === undefined) {

			Memory.room = {}
			Memory.room.Constructions = {};
			Memory.room.Constructions.Extensions = 0;


			console.log("Config for Room: " + room + " initialized");

		}
	}

}

module.exports = config;