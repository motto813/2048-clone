var game;

function startGame() {
  console.log("start game");
  game = new Game();
  // Mousetrap.bind('right', game.playTurn("right").bind(game));
  // Mousetrap.bind('left', game.playTurn("left").bind(game));
  // Mousetrap.bind('down', game.playTurn("down").bind(game));
  // Mousetrap.bind('up', game.playTurn("up").bind(game));
  Mousetrap.bind('right', game.moveTilesRight.bind(game));
  Mousetrap.bind('left', game.moveTilesLeft.bind(game));
  Mousetrap.bind('up', game.moveTilesUp.bind(game));
  Mousetrap.bind('down', game.moveTilesDown.bind(game));
}

$(document).ready(function() {
  $(".new-game-button button").on("click", startGame);
});
