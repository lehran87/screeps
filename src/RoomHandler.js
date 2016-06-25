/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */
var Room = require('Room');

var rooms = [];

var RoomHandler = {
  run: function(){
    console.log("RH: Run");
    for(var n in rooms){
      n.run();
    }
    
    if( !(Game.time % 100)){
      for(var n in Game.rooms) {
        var room = Room(Game.rooms[n]);
        rooms.push(room);
      }
      console.log("Raeume: "+rooms.length);
    }
  }
};
 
module.exports = RoomHandler;