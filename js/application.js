function startGame() {
  game = new Game();
  Mousetrap.bind('up', game.moveTilesUp);
  Mousetrap.bind('down', game.moveTilesDown);
  Mousetrap.bind('right', game.moveTilesRight);
  Mousetrap.bind('left', game.moveTilesLeft);
}

$(document).ready(function() {
  $(".new-game-button button").on("click", startGame);
});
