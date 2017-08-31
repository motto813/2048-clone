var moveRightEndPoints = [3, 7, 11, 15];

var Game = function() {
  this.board = new Board();
  this.board.displayBoard();
};

Game.prototype.moveTilesRight = function() {
  // increase index of all tiles by one UNTIL
    // it hits index 3, 7, 11, 15
    // it hits the tile before a tile with a value DIFFERENT
    // it hits a tile with the SAME value as it
  console.log(this);
  var board = this.board;
  board.tiles.forEach(function(tile) {
    while (true) {
      if ( moveRightEndPoints.includes(tile.index) ) {
        break;
      } else if ( board.occupiedGridCells().includes(tile.index + 1) ) {
        if ( board.tiles[tile.index + 1].value === tile.value ) {
          console.log("combine them!");
        } else {
          console.log("tile is blocking me");
          break;
        }
      }
      tile.index ++;
    }
  });
  board.displayBoard();
};

Game.prototype.moveTilesLeft = function() {

};

Game.prototype.moveTilesUp = function() {

};

Game.prototype.moveTilesDown = function() {

};


// Possible functions
// game over?

// you can't move that way!

// move that way!

// board: add a tile

