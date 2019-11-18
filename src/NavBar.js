const React = require("./libs/deact");

const NavBar = function(attributes, content) {
  return React.create("nav", { class: "nav-bar" }, "");
};

module.exports = NavBar;
