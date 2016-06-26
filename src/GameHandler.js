var RoomHandler = require('RoomHandler');

var GameHandler = {
  rooms: [],
  run : function(){
    console.log("GH runs "+GameHandler.rooms);
    if(GameHandler.rooms.length > 0){
      for(var r in GameHandler.rooms){
        console.log(r);
        GameHandler.rooms[r].run();
      }
    }else{
      GameHandler.init();
    }
    if(Game.time % 100 === 0){
      GameHandler.init();
    }
  },

  init : function(){
    console.log("Reinit");
    for(var room in Game.rooms){
      var r = new RoomHandler(room);
      GameHandler.rooms.push(r);
    }
  }
};

module.exports=GameHandler;
