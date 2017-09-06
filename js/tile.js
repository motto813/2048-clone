var Tile = function(index, value = 2) {
  this.index = index;
  this.row = this.getRow(index);
  this.column = this.getColumn(index);
  this.value = value;
};

Tile.prototype.increaseValue = function() {
  this.value *= 2;
}

Tile.prototype.getRow = function(index) {
  return Math.floor(index / 4);
}

Tile.prototype.getColumn = function(index) {
  return index % 4;
}

Tile.prototype.setIndex = function() {
  this.index = this.row * 4 + this.column;
}
