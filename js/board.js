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

Board.prototype.shiftTilesRight = function() {
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length; i++ ) {
      slice[i].column = 3 - i;
      slice[i].setIndex();
    }
  });
}

Board.prototype.createRightTiles = function() {
  this.tiles.length = 0;
  for ( var slice = 0; i < this.slices.length; slice++ ) {
    for ( var i = 0; i < slice.length; i++ ) {
      this.tiles.push(new Tile())
    }
  }
}

Board.prototype.shiftTilesLeft = function() {
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length; i++ ) {
      slice[i].column = i;
      slice[i].setIndex();
    }
  });
}

Board.prototype.shiftTilesDown = function() {
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length; i++ ) {
      slice[i].row = 3 - i;
      slice[i].setIndex();
    }
  });
}

Board.prototype.shiftTilesUp = function() {
  this.slices.forEach(function(slice) {
    for ( var i = 0; i < slice.length; i++ ) {
      slice[i].row = i;
      slice[i].setIndex();
    }
  });
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
    // for ( var i = 0; i < slice.length - 1; i++ ) {
    //   if ( slice[i].value === slice[i + 1].value ) {
    //     slice[i].increaseValue();
    //     this.removeCombinedTile(slice[i + 1]);
    //     // console.log(this.allGridCells);
    //     console.log("current tiles below");
    //     console.log(slice[i]);
    //     console.log(slice[i + 1]);
    //     // this.allGridCells.splice(slice[i + 1].index, 1, 0);
    //     // console.log(this.allGridCells);
    //     // slice.splice(i + 1, 1);
    //     i++;
    //   }
    // }
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

Board.prototype.removeCombinedTile = function(removeTile) {
  this.tiles = this.tiles.filter(function(tile) {
    return tile.index !== removeTile.index;
  });
  this.allGridCells.splice(removeTile.index, 1, 0);
}
