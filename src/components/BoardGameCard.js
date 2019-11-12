const Deact = require("../libs/deact");

function BoardGameCard(boardGame) {
  return Deact.create("section"), { class: `board-game-card` }, [Deact.create];
}
module.exports = BoardGameCard;
