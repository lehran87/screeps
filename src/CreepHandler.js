var HarvestModule = require('HarvestModule');


var CreepHandler = function(room){
  this.room = room;
  this.harvest = new HarvestModule(room);
  this.harvestBody = [WORK, MOVE, MOVE, CARRY];
};

CreepHandler.prototype.run = function(){
    if(this.harvest.run() < 0)
      this.createNewCreep('harvest');
};

CreepHandler.prototype.createNewCreep = function(type){
    switch(type){
      case 'harvest':
          var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
          spawn = _.filter(spawn, (sp) => sp.canCreateCreep(this.harvestBody)==0);
          if(spawn.length > 0 ){
            var name = spawn[0].createCreep(this.harvestBody, undefined,
                                              {task: 'harvest'});
            console.log("Neuer Creep: "+name);
          }
    }
};


module.exports=CreepHandler;
