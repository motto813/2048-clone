var moveRightEndPoints = [3, 7, 11, 15];

var Game = function() {
  this.board = new Board();
  this.board.displayBoard();
};

Game.prototype.moveGameForward = function() {
  // this.playCurrentTurn();
  this.board.addTile();
  this.board.populateGridCells();
  this.board.displayBoard();
}

Game.prototype.playCurrentTurn = function() {
  this.board.combinePossibleCells();
  this.board.shiftTiles();
}

Game.prototype.moveTilesRight = function() {
  console.log(this);
  this.board.createRowsRight();
  this.board.combinePossibleCells();
  this.board.shiftTilesRight();
  this.moveGameForward();
}

Game.prototype.moveTilesLeft = function() {

}

Game.prototype.moveTilesUp = function() {

}

Game.prototype.moveTilesDown = function() {

}


// Possible functions
// game over?

// you can't move that way!

// move that way!

// board: add a tile

