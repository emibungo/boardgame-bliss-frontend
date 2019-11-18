const Deact = require("../../libs/deact");
const BoardgameDropDown = require("../BoardgameDropDown");
const Button = require("../Button");
const Http = require("../utils/http");

async function BoardgameDetailsForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const boardgameId = document.querySelector(".boardgame-id").value;
    const numberOfPlayers = document.querySelector(
      ".boardgame-number-of-players"
    ).value;
    const ageRange = document.querySelector(".boardgame-age-range").value;
    const length = document.querySelector(".boardgame-length").value;
    const publisher = document.querySelector(".boardgame-publisher").value;

    const response = await fetch(`http://localhost:3000/gamedetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        boardgameId,
        numberOfPlayers,
        ageRange,
        length,
        publisher
      })
    });
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    await BoardgameDropDown(),
    Deact.create(
      "input",
      {
        class: "boardgame-number-of-players",
        placeholder: "Number of Players",
        type: "text"
      },
      ""
    ),
    Deact.create(
      "input",
      {
        class: "boardgame-age-range",
        placeholder: "Age Range",
        type: "text"
      },
      ""
    ),
    Deact.create(
      "input",
      {
        class: "boardgame-length",
        placeholder: "Boardgame Length",
        type: "text"
      },
      ""
    ),
    Deact.create(
      "input",
      {
        class: "boardgame-publisher",
        placeholder: "Publisher",
        type: "text"
      },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = BoardgameDetailsForm;
