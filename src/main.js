var GameHandler = require('GameHandler');

module.exports.loop = function(){
  //Alte Creep Erinnerungen löschen
    for(var i in Memory.creeps) {
      if(!Game.creeps[i]) {
          delete Memory.creeps[i];
      }
  }
  //Handler abarbeiten
  GameHandler.run();

};
