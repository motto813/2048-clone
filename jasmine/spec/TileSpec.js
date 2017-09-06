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

  describe("passing in 0 for the index", function() {
    var tile;

    beforeEach(function() {
      tile = new Tile({ "index": 0 });
    })

    it("should have an index of 0", function() {
      expect(tile.index).toEqual(0);
    });

  });

  describe("creating from a row, column, and value", function() {
    var tile;

    beforeEach(function() {
      tile = new Tile({ "row": 0, "column": 3, "value": 16 })
    });

    it("should have an index of 11", function() {
      console.log(tile.row);
      console.log(tile.index);
      expect(tile.index).toEqual(3);
    });

    it("should have a value of 16", function() {
      expect(tile.value).toEqual(16);
    })

  });

});
