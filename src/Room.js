/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */
 
var Room = {
  Room: function(room){
    this.room=room;
    this.structures = [];
    
    this.creepHandler = new CreepHandler(room);
  },

  run: function(){
    creepHandler.run();
  }
};
 
module.exports = Room;