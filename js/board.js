var Board = function() {

  this.tiles = [];
  this.allGridCells = this.arrayOfZeroes(16);
  this.slices = this.arrayOfZeroes(4);

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

Board.prototype.createSlicesRight = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.slices[i] = slice;
  }
  this.sortForRightAndDown();
}

Board.prototype.createSlicesLeft = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.slices[i] = slice;
  }
  this.sortForleftAndUp();
}

Board.prototype.createSlicesDown = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.column === i;
    });
    this.slices[i] = slice;
  }
  this.sortForRightAndDown();
}

Board.prototype.createSlicesUp = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.slices[i] = slice;
  }
  this.sortForleftAndUp();
}

Board.prototype.sortForRightAndDown = function() {
  this.slices.map(function(slice) {
    return slice.sort(function(a, b) {
      return b.index - a.index;
    });
  });
}

Board.prototype.sortForleftAndUp = function() {
  this.slices.map(function(slice) {
    return slice.sort(function(a, b) {
      return a.index - b.index;
    });
  });
}

Board.prototype.combinePossibleCells = function() {
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length - 1; i++ ) {
      if ( slice[i].value === slice[i + 1].value ) {
        slice[i].increaseValue();
        this.removeCombinedTile(slice[i + 1]);
        slice.splice(i + 1, 1);
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
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length; i++ ) {
      slice[i].column = 3 - i;
      slice[i].setIndex();
    }
  });
}
