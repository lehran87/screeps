/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */

 var harvester = require('HarvesterModule');
 //var builder = require('BuilderModule');
 //var upgrader = require('UpgraderModule');
 
 var roleHarvester = [CARRY, WORK, MOVE, MOVE];
 var roleBuilder   = [CARRY, WORK, MOVE, MOVE];
 var roleUpdater   = [CARRY, WORK, MOVE, MOVE];
 
 function CreepHandler(room){
    this.harvester = HarvesterModule();
    this.builder = BuilderModule();
    this.updater = UpdaterModule();
    this.room = room;
};
  
CreepHandler.prototype.run = function(){
    console.log("CH: Run");
    checkModules(); //sind alle Module vorhanden?
    //Run in allen Modulen aufrufen
    harvester.run();
    //builder.run();
    //updater.run();
};
  
CreepHandler.prototype.createCreep = function(role, spawn){
    switch(role){
      case 'harvester':
        return spawn.createCreep(roleHarvester, 0, {role: ['builder','harvester','updater']});
      case 'builder':
        return spawn.createCreep(roleBuilder, 0, {role: ['builder','harvester','updater']});
      case 'updater':
        return spawn.createCreep(roleUpdater, 0, {role: ['builder','harvester','updater']});
      default:
        break;
    }
    return;
};
  
 CreepHandler.prototype.checkModules = function() {
    console.log("CH: Check");
    if(!harvester){
      console.log('Fehlender Harvester, erstelle neuen');
      this.harvester = HarvesterModule(room);
    }
//    if(!builder){
//      console.log('Fehlender Builder, erstelle neuen');
//      this.builder = BuilderModule(room);
//    }
//    if(!updater){
//      console.log('Fehlender Updater, erstelle neuen');
//      this.updater = UpdaterModule(room);
//    }  
  };

module.exports = CreepHandler;