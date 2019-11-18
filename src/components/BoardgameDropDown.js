const Deact = require("../libs/deact");
const Http = require("../utils/http");

async function getBoardgames() {
  const boardgamesResponse = await fetch("http://localhost:3000/boardgames", {
    mode: "cors",
    method: "GET",
    headers: { Accept: "application/json" }
  });

  const allBoardgames = await boardgamesResponse.json();
  return allBoardgames;
}

async function BoardgameDropDown() {
  const allBoardgames = await getBoardgames();

  const boardgameOptionElements = allBoardgames.boardgames.map(boardgame => {
    return Deact.create("option", { value: boardgame._id }, boardgame.name);
  });

  return Deact.create(
    "select",
    { class: "boardgame-id" },
    boardgameOptionElements
  );
}

module.exports = BoardgameDropDown;
