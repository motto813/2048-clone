describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  describe("initializing a board", function() {

    it("should start with two tiles", function() {
      expect(board.tiles.length).toEqual(2);
    });

    it("should start with four slices containing zeroes", function() {
      expect(board.slices.length).toEqual(4);
      board.slices.forEach(function(slice) {
        expect(slice).toEqual(0);
      });
    });

    it("should start with two tiles in the 16 grid cells", function() {
      var tileGridCells = board.allGridCells.filter(function(cell) {
        return cell !== 0;
      });
      expect(tileGridCells.length).toEqual(2);
    });

  });

  describe("picking an open tile", function() {

    it("should choose an available index", function() {
      board.allGridCells = [ 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1];

      expect(board.openIndices()).toEqual([ 0, 3, 5, 6, 9, 11, 14 ]);
      expect(board.allGridCells[board.randomOpenIndex()]).toEqual(0);
    });

  });

  describe("creating the slices", function() {

    // row 0: [ 4, 0, 4, 2 ]
    // column 0: [ 4, 2, 4, 2 ]

    beforeEach(function() {
      board.tiles.length = 0;
      board.tiles.push(new Tile({ "index": 2, "value": 4 }));
      board.tiles.push(new Tile({ "index": 3 }));
      board.tiles.push(new Tile({ "index": 0, "value": 4 }));

      board.tiles.push(new Tile({ "index": 12 }));
      board.tiles.push(new Tile({ "index": 8, "value": 4 }));
      board.tiles.push(new Tile({ "index": 4 }));
    });

    it("should create a row slice for moving right with the highest index first", function() {
      board.createSlices("right");

      expect(board.slices[0]).toEqual([ 2, 4, 4 ]);
    });

    it("should create a row slice for moving left with the lowest index first", function() {
      board.createSlices("left");

      expect(board.slices[0]).toEqual([ 4, 4, 2 ]);
    });

    it("should create a column slice for moving down with the highest index first", function() {
      board.createSlices("down");

      expect(board.slices[0]).toEqual([ 2, 4, 2, 4 ]);
    });

    it("should create a column slice for moving up with the lowest index first", function() {
      board.createSlices("up");

      expect(board.slices[0]).toEqual([ 4, 2, 4, 2 ]);
    });

  });

  describe("combining alike cells", function() {

    it("should combine 2 4 4 into 2 8", function() {
      var slice = [ 2, 4, 4 ];

      expect(board.combineSlice(slice)).toEqual([ 2, 8 ]);
    });

    it("should combine 2 2 2 4 into 4 2 4", function() {
      var slice = [ 2, 2, 2, 4 ];

      expect(board.combineSlice(slice)).toEqual([ 4, 2, 4 ]);
    });

    it("should combine 4 2 2 2 into 4 4 2", function() {
      var slice = [ 4, 2, 2, 2 ];

      expect(board.combineSlice(slice)).toEqual([ 4, 4, 2 ]);
    });

    it("should combine 2 2 4 4 into 4 8", function() {
      var slice = [ 2, 2, 4, 4 ];

      expect(board.combineSlice(slice)).toEqual([ 4, 8 ]);
    });

    it("should combine 2 2 2 into 4 2", function() {
      var slice = [ 2, 2, 2 ];

      expect(board.combineSlice(slice)).toEqual([ 4, 2]);
    });

    it("should combine 2 2 2 2 into 4 4", function() {
      var slice = [ 2, 2, 2, 2 ];

      expect(board.combineSlice(slice)).toEqual([ 4, 4 ]);
    })

  });

  describe("populating the board from slices", function() {

    beforeEach(function() {
      board.slices = [
                      [ 4, 2, 2 ],
                      [ 16, 8 ],
                      [ 4, 2 ],
                      [ 2, 4 ]
                     ];
    });

    afterEach(function() {
      board.slices.length = 0;
    });

    describe("moving tiles right", function() {

      it("should create 9 tiles", function() {
        board.createTilesFromSlices("right");

        expect(board.tiles.length).toEqual(9);
      });

      it("should create a tile with index 7 and value 16", function() {
        board.createTilesFromSlices("right");

        var tiles = board.tiles.filter(function(tile) {
          return tile.index === 7;
        });

        expect(tiles.length).toEqual(1);
        expect(tiles[0].value).toEqual(16);
      });

    });

    describe("moving tiles left", function() {

      it("should create 9 tiles", function() {
        board.createTilesFromSlices("left");

        expect(board.tiles.length).toEqual(9);
      });

      it("should create a tile with index 4 and value 16", function() {
        board.createTilesFromSlices("left");

        var tiles = board.tiles.filter(function(tile) {
          return tile.index === 4;
        });

        expect(tiles.length).toEqual(1);
        expect(tiles[0].value).toEqual(16);
      });

    });

    describe("moving tiles down", function() {

      it("should create 9 tiles", function() {
        board.createTilesFromSlices("down");

        expect(board.tiles.length).toEqual(9);
      });

      it("should create a tile with index 13 and value 16", function() {
        board.createTilesFromSlices("down");

        var tiles = board.tiles.filter(function(tile) {
          return tile.index === 13;
        });

        expect(tiles.length).toEqual(1);
        expect(tiles[0].value).toEqual(16);
      });

    });

    describe("moving tiles up", function() {

      it("should create 9 tiles", function() {
        board.createTilesFromSlices("up");

        expect(board.tiles.length).toEqual(9);
      });

      it("should create a tile with index 1 and value 16", function() {
        board.createTilesFromSlices("up");

        var tiles = board.tiles.filter(function(tile) {
          return tile.index === 1;
        });

        expect(tiles.length).toEqual(1);
        expect(tiles[0].value).toEqual(16);
      });

    });

  });

});
