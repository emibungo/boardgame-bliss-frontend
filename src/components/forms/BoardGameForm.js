const Deact = require("../../libs/deact");
const Button = require("../Button");
const Http = require("../utils/http");

async function BoardgameForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector(".boardgame-title").value;
    const yearPublished = document.querySelector(".boardgame-year-published")
      .value;
    const image = document.querySelector(".boardgame-image").value;

    const response = await fetch(`http://localhost:3000/boardgames`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        yearPublished,
        image
      })
    });
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create(
      "input",
      {
        class: "boardgame-title",
        placeholder: "Boardgame Title",
        type: "text"
      },
      ""
    ),
    Deact.create(
      "input",
      {
        class: "boardgame-yearPublished",
        placeholder: "Year Published",
        type: "text"
      },
      ""
    ),
    Deact.create(
      "input",
      { class: "boardgame-image", placeholder: "Image URL", type: "text" },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = BoardgameForm;
