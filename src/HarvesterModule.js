/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('RoomHandler');
 * mod.thing == 'a thing'; // true
 */

var creepHandler = require('CreepHandler'); 

function HarvestModule(room){
    this.creeps = {};
    this.room = room;
};
 
HarvestModule.prototype.run = function(){
    if(creeps.length < Memory.population.harvester){
      var spawns = room.find(FIND_MY_SPAWNS);
      var spawn = _.filter(spawns, (sp) => sp.energy == energyCapacity );
      if(spawn.length > 0)
        creeps.push(creepHandler.createCreep('harvester',spawn[0]));
      else
        console.log("Nicht genug Energie zum Spawnen");
    }
    for(var creep in creeps){
      if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findNearest(Game.SOURCES)
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            var spawns = room.find(FIND_MY_SPAWNS);
            var spawn = _.filter(spawns, (sp) => sp.energy < energyCapacity );
            if(creep.transfer(Game.spawns[spawn[0]], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns[spawn[0]]);
            }
        }
    }
  }
};

module.exports = HarvesterModule;