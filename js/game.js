var Game = function() {
  this.board = new Board();
  this.board.displayBoard();
};

Game.prototype.moveGameForward = function() {
  this.board.populateGridCells();
  this.board.addTile();
  this.board.slices = this.board.arrayOfZeroes(4);
  this.board.displayBoard();
}

// Game.prototype.playCurrentTurn = function() {
//   this.board.combinePossibleCells();
//   this.board.shiftTiles();
// }

Game.prototype.moveTilesRight = function() {
  this.board.createSlicesRight();
  this.board.combinePossibleCells();
  this.board.createRightTiles();
  this.moveGameForward();
}

Game.prototype.moveTilesLeft = function() {
  this.board.createSlicesLeft();
  this.board.combinePossibleCells();
  this.board.shiftTilesLeft();
  this.moveGameForward();
}

Game.prototype.moveTilesUp = function() {
  this.board.createSlicesUp();
  this.board.combinePossibleCells();
  this.board.shiftTilesUp();
  this.moveGameForward();
}

Game.prototype.moveTilesDown = function() {
  this.board.createSlicesDown();
  this.board.combinePossibleCells();
  this.board.shiftTilesDown();
  this.moveGameForward();
}


// Possible functions
// game over?

// you can't move that way!

// move that way!

// board: add a tile

