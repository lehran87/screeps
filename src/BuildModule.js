//Creep, der baut :-P
//
//Todo:
//  - nur von der Source Energie holen, wenn kein COntainer gefuellt ist

var Population = require('Population');

var BuildModule = function(room){
    this.room = room;
};

BuildModule.prototype.run = function(){
        console.log("BuildModule run: "+this.room);

        var creeps = Game.rooms[this.room].find(FIND_MY_CREEPS);
        creeps = _.filter(creeps, (creep) => creep.memory.task == 'build');
        for(var cr in creeps){
          var creep = creeps[cr];

          if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
      	  }
      	  if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      	     creep.memory.building = true;
      	  }

      	  if(creep.memory.building) {
      	     var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
             if(targets.length) {
               if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                 creep.moveTo(targets[0]);
              }
             }
      	  } else {
             var source = creep.pos.findClosestByRange(FIND_SOURCES);
             if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
               creep.moveTo(source);
             }
      	  }


        }

        if(creeps.length < Population.builder){
            return -1;
        }
        return 1;
};

module.exports = BuildModule;
