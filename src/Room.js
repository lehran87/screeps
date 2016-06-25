/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */
 
function Room (room){
    this.room=room;
    this.structures = [];
    
    this.creepHandler = CreepHandler(room);
};

Room.prototype.run = function(){
    console.log("Room "+room+": Run");
    creepHandler.run();
  }
};
 
module.exports = Room;