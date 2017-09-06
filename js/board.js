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
  this.tiles.push(new Tile({ "index": this.randomOpenIndex() }));
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

Board.prototype.convertSlicesToInts = function() {
  this.slices = this.slices.map(function(slice) {
    return slice.map(function(cell) {
      return cell.value;
    });
  });
}

Board.prototype.createSlicesRight = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.slices[i] = slice;
  }
  this.sortForRightAndDown();
  this.convertSlicesToInts();
}

Board.prototype.createSlicesLeft = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.row === i;
    });
    this.slices[i] = slice;
  }
  this.sortForLeftAndUp();
  this.convertSlicesToInts();
}

Board.prototype.createSlicesDown = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.column === i;
    });
    this.slices[i] = slice;
  }
  this.sortForRightAndDown();
  this.convertSlicesToInts();
}

Board.prototype.createSlicesUp = function() {
  for ( var i = 0; i < this.slices.length; i++ ) {
    var slice = this.tiles.filter(function(tile) {
      return tile.column === i;
    });
    this.slices[i] = slice;
  }
  this.sortForLeftAndUp();
  this.convertSlicesToInts();
}

Board.prototype.createRightTiles = function() {
  this.tiles.length = 0;
  for ( var slice = 0; slice < this.slices.length; slice++ ) {
    for ( var i = 0; i < this.slices[slice].length; i++ ) {
      var value = this.slices[slice][i];

      this.tiles.push(new Tile({
                                "row": slice,
                                "column": (3 - i),
                                "value": value
                              }));
    }
  }
}

Board.prototype.createLeftTiles = function() {
  this.tiles.length = 0;
  for ( var slice = 0; slice < this.slices.length; slice++ ) {
    for ( var i = 0; i < this.slices[slice].length; i++ ) {
      var value = this.slices[slice][i];

      this.tiles.push(new Tile({
                                "row": slice,
                                "column": i,
                                "value": value
                              }));
    }
  }
}

Board.prototype.createDownTiles = function() {
  this.tiles.length = 0;
  for ( var slice = 0; slice < this.slices.length; slice++ ) {
    for ( var i = 0; i < this.slices[slice].length; i++ ) {
      var value = this.slices[slice][i];

      this.tiles.push(new Tile({
                                "row": (3 - i),
                                "column": slice,
                                "value": value
                              }));
    }
  }
}

Board.prototype.createUpTiles = function() {
  this.tiles.length = 0;
  for ( var slice = 0; slice < this.slices.length; slice++ ) {
    for ( var i = 0; i < this.slices[slice].length; i++ ) {
      var value = this.slices[slice][i];

      this.tiles.push(new Tile({
                                "row": i,
                                "column": slice,
                                "value": value
                              }));
    }
  }
}

Board.prototype.sortForRightAndDown = function() {
  this.slices.map(function(slice) {
    return slice.sort(function(a, b) {
      return b.index - a.index;
    });
  });
}

Board.prototype.sortForLeftAndUp = function() {
  this.slices.map(function(slice) {
    return slice.sort(function(a, b) {
      return a.index - b.index;
    });
  });
}

Board.prototype.combinePossibleCells = function() {
  this.slices = this.slices.map(function(slice) {
    return this.combineSlice(slice);
  }, this);
}

Board.prototype.combineSlice = function(slice) {
  for ( var i = 0; i < slice.length - 1; i++ ) {
    if ( slice[i] === slice[i + 1] ) {
      slice[i] *= 2;
      slice.splice(i + 1, 1);
      i++;
    }
  }
  return slice;
}
