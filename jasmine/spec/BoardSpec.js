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

    // describe("converting the slices", function() {

    //   it("should convert the cells to their values")

    // });

    it("should create a row slice for moving right with the highest index first", function() {
      board.createSlicesRight();
      // board.convertSlices();
      console.log(board.slices[0]);

      expect(board.slices[0]).toEqual([ 2, 4, 4 ]);
    });

    it("should create a row slice for moving left with the lowest index first", function() {
      board.createSlicesLeft();
      // board.convertSlices();

      expect(board.slices[0]).toEqual([ 4, 4, 2 ]);
    });

    it("should create a column slice for moving down with the highest index first", function() {
      board.createSlicesDown();
      // board.convertSlices();
      console.log(board.slices[0]);

      expect(board.slices[0]).toEqual([ 2, 4, 2, 4 ]);
    });

    it("should create a column slice for moving up with the lowest index first", function() {
      board.createSlicesUp();
      // board.convertSlices();

      expect(board.slices[0]).toEqual([ 4, 2, 4, 2 ]);
    });

  });

  describe("combining alike cells", function() {

    it("should combine 2 4 4 into 2 8", function() {
      var slice = [ 2, 4, 4 ];
      // this.combineSlice(slice);

      expect(board.combineSlice(slice)).toEqual([ 2, 8 ]);
    });

  });

  describe("populating the board from slices", function() {



  });

});
