var Board = function() {
  this.gridCells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  this.tiles = [];
  this.addTile();
  this.addTile();
}

Board.prototype.displayBoard = function() {
  // iterate through tiles ARRAY and change html of index value using div ID
  _.each(this.tiles, function(tile) {
    $('#' + tile.index).html(tile.value);
  });
}

Board.prototype.addTile = function() {
  // make a NEW TILE by passing in a sampled value from OPEN GRID CELLS
  this.tiles.push(new Tile(this.randomOpenGridCell()));
}

Board.prototype.randomOpenGridCell = function() {
  return this.openGridCells()[Math.floor(Math.random() * this.openGridCells().length)]
}

Board.prototype.occupiedGridCells = function() {
  var usedArr = [];
  this.tiles.forEach(function(tile) {
    usedArr.push(tile.index);
  });
  return usedArr;
}

Board.prototype.openGridCells = function() {
  return this.gridCells.diff(this.occupiedGridCells());
}

Array.prototype.diff = function(usedArr) {
  return this.filter(function(index) {
    return usedArr.indexOf(index) < 0;
  });
};
