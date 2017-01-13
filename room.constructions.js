var constructor = {


	/** @param {Room} room **/
	build_extensions: function(room) {
        let spawn1 = Game.spawns['Spawn1'];
        let initial_x = spawn1.pos.x + 2;
        let initial_y = spawn1.pos.y;

        // // TODO use lookAt instead of createConSite
        if(Game.gcl.level > 1) {
                while(Game.rooms[room].createConstructionSite(initial_x, initial_y, STRUCTURE_EXTENSION) != OK){
                initial_x = initial_x + 1;
            }

            Memory[room.name].Constructions.Extensions += 1;
        }
	}
}


module.exports = constructor;


