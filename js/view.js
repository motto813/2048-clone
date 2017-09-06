var View = function(tiles) {

  this.nukeBoard();
  this.displayBoard(tiles);

};

View.prototype.nukeBoard = function() {
  $('.grid-cell').html('');
}

View.prototype.displayBoard = function(tiles) {
  tiles.forEach(function(tile) {
    $('#' + tile.index).html(tile.value);
  });
}
