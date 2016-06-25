/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */
 
module.exports = {
  function Room(room){
    this.room=room;
    this.structures = [];
    
    this.creepHandler = new CreepHandler(room);
  };
  
  function run(){
    creepHandler.run();
  }
};