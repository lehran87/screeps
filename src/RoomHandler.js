var CreepHandler = require('CreepHandler');

var RoomHandler = function(room){
  this.room = room;
  this.ch = new CreepHandler(room);
};

RoomHandler.prototype.run = function(){
    this.ch.run();
};

module.exports = RoomHandler;
