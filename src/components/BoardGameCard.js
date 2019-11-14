const Deact = require("../libs/deact");

function BoardGameCard(boardGame) {
  return (
    Deact.create("section"),
    { class: `boardgame-card` },
    [
      Deact.create("h3", { class: `boardgame__name` }, boardGame.name),
      Deact.create("p", { class: `boardgame` })
    ]
  );
}
module.exports = BoardGameCard;
