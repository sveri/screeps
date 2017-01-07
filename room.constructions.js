var constructor = {


	/** @param {Room} room **/
	build_extensions: function(room) {
        let spawn1 = Game.spawns['Spawn1'];
        let initial_x = spawn1.x;
        let initial_y = spawn1.y;
        
        //console.log(Game.rooms[room]);
        //while(Game.rooms[room].createConstructionSite(initial_x, initial_y, STRUCTURE_EXTENSION) != OK){
        //    initial_x++;
        //}
			
	    //console.log(spawn1.pos.x);
	}
}


module.exports = constructor;