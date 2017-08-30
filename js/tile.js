var Tile = function(index) {
  this.index = index;
  this.row = this.getRow(index);
  this.column = this.getColumn(index);
  this.value = 2;
}

Tile.prototype.increaseValue = function() {
  this.value *= 2;
}

Tile.prototype.getRow = function(index) {
  return Math.floor(index / 4);
}

Tile.prototype.getColumn = function(index) {
  return index % 4;
}
