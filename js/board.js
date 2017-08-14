var Board = function() {
  this.openGridCells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
  this.tiles.push(new Tile(this.randomOpenIndex()));
}

Board.prototype.randomOpenIndex = function() {
  return this.openGridCells[Math.floor(Math.random() * this.openGridCells.length)]
}
