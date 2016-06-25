/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */

 var harvester = require('HarvesterModule');
 var builder = require('BuilderModule');
 var updater = require('UpdaterModule');
 
 var roleHarvester = [CARRY, WORK, MOVE, MOVE];
 var roleBuilder   = [CARRY, WORK, MOVE, MOVE];
 var roleUpdater   = [CARRY, WORK, MOVE, MOVE];
 
var CreepHandler = {
  CreepHandler: function(room){
    this.harvester = new HarvesterModule();
    this.builder = new BuilderModule();
    this.updater = new UpdaterModule();
    this.room = room;
  },
  
  run: function(){
    console.log("CH: Run");
    checkModules(); //sind alle Module vorhanden?
    //Run in allen Modulen aufrufen
    harvester.run();
    builder.run();
    updater.run();
  },
  
  createCreep: function(role, spawn){
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
  },
  
  checkModules: function() {
    console.log("CH: Check");
    if(!harvester){
      console.log('Fehlender Harvester, erstelle neuen');
      this.harvester = new HarvesterModule(room);
    }
    if(!builder){
      console.log('Fehlender Builder, erstelle neuen');
      this.builder = new BuilderModule(room);
    }
    if(!updater){
      console.log('Fehlender Updater, erstelle neuen');
      this.updater = new UpdaterModule(room);
    }  
  }
};

module.exports = CreepHandler;