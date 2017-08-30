describe("Tile", function() {
  var tile;
  var index = 11;

  beforeEach(function() {
    tile = new Tile(index);
  });

  it("should have an initial value of 2", function() {
    expect(tile.value).toEqual(2);
  });

  it("should have a row coordinate of 2", function() {
    expect(tile.row).toEqual(2);
  });

  it("should have a column coordinate of 3", function() {
    expect(tile.column).toEqual(3);
  });
});
