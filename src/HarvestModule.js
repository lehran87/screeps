//Creep, der die Source erntet und den Spawner fuellt
//
//Todo: ist der Spawner voll, koennten Container gefuellt werden

var Population = require('Population');

var HarvestModule = function(room){
    this.room = room;
};

HarvestModule.prototype.run = function(){
        //console.log("Harvester run: "+this.room);

        var creeps = Game.rooms[this.room].find(FIND_MY_CREEPS);
        creeps = _.filter(creeps, (creep) => creep.memory.task == 'harvest');
        var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
        spawn = _.filter(spawn, (sp) => sp.energy < sp.energyCapacity);

        var containers = Game.rooms[this.room].find(FIND_STRUCTURES);
        containers = _.filter(containers, (c) => c.structureType === STRUCTURE_CONTAINER);
        containers = _.filter(containers, (c) => c.store[RESOURCE_ENERGY] < c.storeCapacity);

        for(var cr in creeps){
          var creep = creeps[cr];
          if(creep.carry.energy < creep.carryCapacity) {
                   var source = creep.pos.findClosestByRange(FIND_SOURCES);
                   if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                       creep.moveTo(source);
                   }
          }else {
            if(spawn[0]){
              if(creep.transfer(spawn[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(spawn[0]);
               }
            } else {
              console.log("Container "+containers[0]);
              if(creep.transfer(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(containers[0]);
               }
            }
          }
        }
        if(creeps.length < Population.harvester){
            return -1;
        }
        return 1;
};

module.exports = HarvestModule;
