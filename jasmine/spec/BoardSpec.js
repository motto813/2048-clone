describe("Board", function() {

  beforeEach(function() {
    board = new Board();
  });

  it("should initialize with two tiles", function() {
    expect(board.tiles.length).toEqual(2);
  });

});
