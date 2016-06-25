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
  },
  
  newRoom: function(newRoom){
    var room = new Room(newRoom);
    rooms.push(room);
  }
};
 
module.exports = RoomHandler;