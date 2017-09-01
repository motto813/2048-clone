var Board = function() {
  // this.gridCells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // this.tiles = [];
  // this.addTile();
  // this.addTile();

  this.tiles = [];
  this.allGridCells = this.createEmptyBoard();
  this.rows = [];

  this.initiateGridCells();
};

Board.prototype.createEmptyBoard = function() {
  return Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0);
}

Board.prototype.initiateGridCells = function() {
  this.addTile();
  this.addTile();
  this.populateGridCells();
}

Board.prototype.populateGridCells = function() {
  this.tiles.forEach(function(tile) {
    console.log(tile);
    console.log(tile.index);
    // console.log(allGridCells);
    this.allGridCells[tile.index] = tile;
  }, this);
}

// Board.prototype.fillInBlanks = function() {

// }

Board.prototype.nukeBoard = function() {
  $('.grid-cell').html('');
}

Board.prototype.displayBoard = function() {
  // iterate through tiles ARRAY and change html of index value using div ID
  this.nukeBoard();
  this.tiles.forEach(function(tile) {
    $('#' + tile.index).html(tile.value);
  });
}

Board.prototype.addTile = function() {
  // make a NEW TILE by passing in a sampled value from OPEN GRID CELLS
  this.tiles.push(new Tile(this.randomOpenIndex()));
}

Board.prototype.randomOpenIndex = function() {
  return this.openIndices()[Math.floor(Math.random() * this.openIndices().length)];
  // return this.allGridCells.filter(function(cell) {
  //   return cell === 0;
  // });
}

// Board.prototype.occupiedGridCells = function() {
//   var usedArr = [];
//   this.tiles.forEach(function(tile) {
//     usedArr.push(tile.index);
//   });
//   return usedArr;
// }

Board.prototype.openIndices = function() {
  // return this.gridCells.diff(this.occupiedGridCells());
  var openIndices = [];
  for ( var i = 0; i < this.allGridCells.length; i++ ) {
    if ( this.allGridCells[i] === 0 ) {
      openIndices.push(i);
    }
  }
  return openIndices;
  // this.allGridCells.forEach(function(cell) {
  //   if ( cell === 0 ) {
  //     openIndices.push()
  //   }
  // });
}

// Array.prototype.diff = function(usedArr) {
//   return this.filter(function(index) {
//     return usedArr.indexOf(index) < 0;
//   });
// }

// Board.prototype.createRowsRight = function() {
//   this.rows.push(new Row);
// }
