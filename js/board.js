var Board = function() {

  this.tiles = [];
  this.allGridCells = this.arrayOfZeroes(16);
  this.rows = this.arrayOfZeroes(4);

  this.initiateGridCells();
};

Board.prototype.arrayOfZeroes = function(num) {
  return Array.apply(null, Array(num)).map(Number.prototype.valueOf, 0);
}

Board.prototype.initiateGridCells = function() {
  this.addTile();
  this.addTile();
  this.populateGridCells();
}

Board.prototype.populateGridCells = function() {
  this.tiles.forEach(function(tile) {
    this.allGridCells[tile.index] = tile;
  }, this);
}

Board.prototype.nukeBoard = function() {
  $('.grid-cell').html('');
}

Board.prototype.displayBoard = function() {
  this.nukeBoard();
  this.tiles.forEach(function(tile) {
    $('#' + tile.index).html(tile.value);
  });
}

Board.prototype.addTile = function() {
  this.tiles.push(new Tile(this.randomOpenIndex()));
}

Board.prototype.randomOpenIndex = function() {
  return this.openIndices()[Math.floor(Math.random() * this.openIndices().length)];
}

Board.prototype.openIndices = function() {
  var openIndices = [];
  for ( var i = 0; i < this.allGridCells.length; i++ ) {
    if ( this.allGridCells[i] === 0 ) {
      openIndices.push(i);
    }
  }
  return openIndices;
}

Board.prototype.createRowsRight = function() {
  for ( var i = 0; i < this.rows.length; i++ ) {
    var row = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.rows[i] = row;
  }
  this.sortForRightAndUp();
}

Board.prototype.sortForRightAndUp = function() {
  this.rows.map(function(row) {
    return row.sort(function(a, b) {
      return b.index - a.index;
    });
  });
}

Board.prototype.sortForleftAndDown = function() {
  this.rows.map(function(row) {
    return row.sort(function(a, b) {
      return a.index - b.index;
    });
  });
}
