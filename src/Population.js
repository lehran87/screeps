var Population = {
  builder: 1,
  harvester: 1,
  upgrader: 1,


  // Body fuer ein Harvester Creep
  harvestBody: [WORK, MOVE, MOVE, CARRY],
  // Body fuer ein Upgrader Creep
  upgraderBody: [WORK, MOVE, MOVE, CARRY],
  // Body fuer ein Builder Creep
  builderBody: [WORK, MOVE, CARRY, CARRY]
};

module.exports = Population;
