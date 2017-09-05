describe("Board", function() {

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

    beforeEach(function() {
      board.tiles.length = 0;
      board.tiles.push(new Tile(2));
      board.tiles.push(new Tile(3));
      board.tiles.push(new Tile(0));

      board.tiles.push(new Tile(12));
      board.tiles.push(new Tile(4));
    });

    it("should create a row slice for moving right with the highest index first", function() {
      board.createSlicesRight();

      expect(board.slices[0][0].row).toEqual(0);
      expect(board.slices[0][0].column).toEqual(3);
      expect(board.slices[0][0].index).toEqual(3);
    });

    it("should create a column slice for moving down with the highest index first", function() {
      board.createSlicesDown();

      expect(board.slices[0][0].row).toEqual(3);
      expect(board.slices[0][0].column).toEqual(0);
      expect(board.slices[0][0].index).toEqual(12);
    });

  });

});
