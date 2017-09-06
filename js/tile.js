var Tile = function(args) {
  args = args || {};

  _.defaults( args, { "index": this.getIndex(args.row, args.column), "row": this.getRow(args.index), "column": this.getColumn(args.index), value: 2 } );

  this.index = args.index;
  this.row = args.row;
  this.column = args.column;
  this.value = args.value;
};

Tile.prototype.getRow = function(index) {
  return Math.floor(index / 4);
}

Tile.prototype.getColumn = function(index) {
  return index % 4;
}

Tile.prototype.getIndex = function(row, column) {
  return row * 4 + column;
}
