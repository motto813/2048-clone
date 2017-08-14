function startGame() {
  console.log("start game");
  game = new Game();
  Mousetrap.bind('right', game.moveTilesRight.bind(game));
  Mousetrap.bind('left', game.moveTilesLeft);
  Mousetrap.bind('up', game.moveTilesUp);
  Mousetrap.bind('down', game.moveTilesDown);
}

$(document).ready(function() {
  $(".new-game-button button").on("click", startGame);
});
