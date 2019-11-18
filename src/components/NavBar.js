const Deact = require("../libs/deact");

const NavBar = function(content) {
  return Deact.create("nav", { class: "nav-bar" }, content);
};

module.exports = NavBar;
