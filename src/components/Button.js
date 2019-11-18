const Deact = require("../libs/deact");

const Button = function(content) {
  return Deact.create("button", { class: "button" }, content);
};

module.exports = Button;
