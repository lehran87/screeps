var HarvestModule = function(room){
    this.room = room;
};

HarvestModule.prototype.run = function(){
        console.log("Harvester run: "+this.room);

        var creeps = Game.rooms[this.room].find(FIND_MY_CREEPS);
        creeps = _.filter(creeps, (creep) => creep.memory.task == 'harvest');
        var spawn = Game.rooms[this.room].find(FIND_MY_SPAWNS);
        spawn = _.filter(spawn, (sp) => sp.energy < sp.energyCapacity);
        for(var cr in creeps){
          var creep = creeps[cr];
          if(creep.carry.energy < creep.carryCapacity) {
                   var sources = creep.pos.findClosestByRange(FIND_SOURCES);
                   if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                       creep.moveTo(sources);
                   }
          }else {
            var e = creep.transfer(spawn[0], RESOURCE_ENERGY);
            if(creep.transfer(spawn[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn[0]);
             }
          }
        }
        if(creeps.length < Memory.harvester){
            return -1;
        }
        return 1;
};

module.exports = HarvestModule;
