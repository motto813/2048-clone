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

Game.prototype.moveTilesRight = function() {
  this.board.createSlicesRight();
  this.board.combinePossibleCells();
  this.board.createRightTiles();
  this.moveGameForward();
}

Game.prototype.moveTilesLeft = function() {
  this.board.createSlicesLeft();
  this.board.combinePossibleCells();
  this.board.createLeftTiles();
  this.moveGameForward();
}

Game.prototype.moveTilesDown = function() {
  this.board.createSlicesDown();
  this.board.combinePossibleCells();
  this.board.createDownTiles();
  this.moveGameForward();
}

Game.prototype.moveTilesUp = function() {
  this.board.createSlicesUp();
  this.board.combinePossibleCells();
  this.board.createUpTiles();
  this.moveGameForward();
}

Game.prototype.checkIfGameOver = function() {
  // IF the tile count is 16 or more AND there is nothing to combine
    // tell View to display game over
}


// Possible functions
// game over?

// you can't move that way!

// move that way!

// board: add a tile

