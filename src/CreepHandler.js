//CreepHandler
//Arbeitet alle Creeps und Module (Rollen) ab
//
//Todo:
//  - dynamische Rollenaenderung: wird gerade kein Creep einer bestimmten
//    Rolle benoetigt, koennte er solang was anders machen (z.B. von Builder zu
//    ernter umschulen)

var Population = require('Population');
var HarvestModule = require('HarvestModule');
var UpgradeModule = require('UpgradeModule');
var BuildModule = require('BuildModule');

var CreepHandler = function(room){
  this.room = room;
  this.harvest = new HarvestModule(room);
  this.upgrade = new UpgradeModule(room);
  this.build = new BuildModule(room);
};

CreepHandler.prototype.run = function(){
    // wird vom Module keine 1 zurueckgeliefert, wird ein neuer Creep benoetigt
    if(this.harvest.run() < 0)
      this.createNewCreep('harvest');
    if(this.upgrade.run() < 0)
      this.createNewCreep('upgrade');
    if(this.build.run() < 0)
      this.createNewCreep('build');
};

//Funktion zum erstellen euer Creeps
CreepHandler.prototype.createNewCreep = function(type){
    switch(type){
      case 'harvest':
          var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
          spawn = _.filter(spawn, (sp) => sp.canCreateCreep(Population.harvestBody)==0);
          if(spawn.length > 0 ){
            var name = spawn[0].createCreep(Population.harvestBody, undefined,
                                              {task: 'harvest'});
            console.log("Neuer Creep: "+name);
          }
          break;
      case 'upgrade':
          var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
          spawn = _.filter(spawn, (sp) => sp.canCreateCreep(Population.upgraderBody)==0);
          if(spawn.length > 0 ){
            var name = spawn[0].createCreep(Population.upgraderBody, undefined,
                                            {task: 'upgrade'});
            console.log("Neuer Creep: "+name);
          }
          break;
      case 'build':
        var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
        spawn = _.filter(spawn, (sp) => sp.canCreateCreep(Population.builderBody)==0);
        if(spawn.length > 0 ){
          var name = spawn[0].createCreep(Population.builderBody, undefined,
                                          {task: 'build'});
          console.log("Neuer Creep: "+name);
        }
        break;
    }
};


module.exports=CreepHandler;
