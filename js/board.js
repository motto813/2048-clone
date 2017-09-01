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
  this.populateGridCells(); // hopefully won't need this later...
  this.addTile();
  this.populateGridCells();
}

Board.prototype.populateGridCells = function() {
  this.allGridCells = this.arrayOfZeroes(16);
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
  this.sortForRightAndDown();
}

Board.prototype.sortForRightAndDown = function() {
  this.rows.map(function(row) {
    return row.sort(function(a, b) {
      return b.index - a.index;
    });
  });
}

Board.prototype.sortForleftAndUp = function() {
  this.rows.map(function(row) {
    return row.sort(function(a, b) {
      return a.index - b.index;
    });
  });
}

Board.prototype.combinePossibleCells = function() {
  this.rows.forEach(function(row) {
    for ( var i = 0; i < row.length - 1; i++ ) {
      if ( row[i].value === row[i + 1].value ) {
        row[i].increaseValue();
        this.removeCombinedTile(row[i + 1]);
        row.splice(i + 1, 1);
        i++;
      }
    }
  }, this);
}

Board.prototype.removeCombinedTile = function(removeTile) {
  this.tiles = this.tiles.filter(function(tile) {
    return tile.index !== removeTile.index;
  });
}

Board.prototype.shiftTilesRight = function() {
  this.rows.forEach(function(row) {
    for ( var i = 0; i < row.length; i++ ) {
      row[i].column = 3 - i;
      row[i].setIndex();
    }
  });
}
