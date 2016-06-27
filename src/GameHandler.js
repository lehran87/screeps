var RoomHandler = require('RoomHandler');

var GameHandler = {
  rooms: [], //alle bekannten Raeume
  run : function(){
    //alle Raeume durcharbeiten
    if(GameHandler.rooms.length > 0){
      for(var r in GameHandler.rooms){
        console.log(r);
        GameHandler.rooms[r].run();
      }
    }else{
      //sind keine Raeume bekannt, versuche wir erstmal eine initialisierung
      GameHandler.init();
    }
    //Zusaetzlich wird alle x Ticks ebenfalls die Raeume neu initialisiert
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
