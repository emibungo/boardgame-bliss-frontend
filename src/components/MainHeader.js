const Deact = require("../libs/deact");
// const Container = require("./Container");
const Button = req;

async function MainHeader() {
  return Deact.create(
    "header",
    { class: `header` },
    "Welcome to Boardgame Bliss"
  );
}
module.exports = MainHeader;
