var Tile = function(args) {
  args = args || {};
  this.index = args.index || this.getIndex(args.row, args.column);
  this.row = args.row || this.getRow(args.index);
  this.column = args.column || this.getColumn(args.index);
  this.value = args.value || 2;
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

Tile.prototype.getIndex = function(row, column) {
  return row * 4 + column;
}

Tile.prototype.setIndex = function(row = this.row, column = this.column) {
  this.index = row * 4 + column;
}
