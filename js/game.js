var Game = function() {
  this.board = new Board();
  new View(this.board.tiles);
};

Game.prototype.moveGameForward = function() {
  this.board.populateGridCells();
  this.board.addRandomTile();
  // this.board.slices = this.board.arrayOfZeroes(4);
  new View(this.board.tiles);
}

// Game.playTurn = function(direction) {
//   this.board.updateBoard(direction);
//   this.board.populateGridCells();
//   this.board.addRandomTile();
//   new View(this.board.tiles);
// }

Game.prototype.moveTilesRight = function() {
  this.board.updateBoard("right");
  this.moveGameForward();
}

Game.prototype.moveTilesLeft = function() {
  this.board.updateBoard("left");
  this.moveGameForward();
}

Game.prototype.moveTilesDown = function() {
  this.board.updateBoard("down");
  this.moveGameForward();
}

Game.prototype.moveTilesUp = function() {
  this.board.updateBoard("up");
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

