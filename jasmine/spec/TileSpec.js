describe("Tile", function() {

  describe("creating from only an index", function() {
    var tile;

    beforeEach(function() {
      tile = new Tile({ "index": 11 });
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

  describe("creating from a row, column, and value", function() {
    var tile;

    beforeEach(function() {
      tile = new Tile({ "row": 2, "column": 3, "value": 16 })
    });

    it("should have an index of 11", function() {
      expect(tile.index).toEqual(11);
    });

    it("should have a value of 16", function() {
      expect(tile.value).toEqual(16);
    })

  });

});
