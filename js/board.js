var Board = function() {
  this.openGridCells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  this.tiles = [];
  this.addTile();
  this.addTile();
}

Board.prototype.displayBoard = function() {

}

Board.prototype.addTile = function() {
  // make a NEW TILE by passing in a sampled value from OPEN GRID CELLS
  tile = new Tile(openGridCells[Math.floor(Math.random() * openGridCells.length)]);
}
