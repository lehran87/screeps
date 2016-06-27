//Creep, der den Controller upgraded
//
//Todo:
//  - nur von der Source Energie holen, wenn kein COntainer gefuellt ist

var Population = require('Population');

var UpgradeModule = function(room){
    this.room = room;
};

UpgradeModule.prototype.run = function(){
        var creeps = Game.rooms[this.room].find(FIND_MY_CREEPS);
        creeps = _.filter(creeps, (creep) => creep.memory.task == 'upgrade');
        for(var cr in creeps){
          var creep = creeps[cr];
          if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
          }
          if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
          }

          if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
              creep.moveTo(creep.room.controller);
            }
          } else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
              creep.moveTo(source);
            }
          }
        }

        if(creeps.length < Population.upgrader){
            return -1;
        }
        return 1;
};

module.exports = UpgradeModule;
