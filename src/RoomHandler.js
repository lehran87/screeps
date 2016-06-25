/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */
var Room = require('Room');

var RoomHandler = {
  var rooms = [];
  function run(){
    for(var n in rooms){
      n.run();
    }
  }
  
  function newRoom(newRoom){
    var room = new Room(newRoom);
    rooms.push(room);
  }
}
 
module.exports = RoomHandler;