const Deact = require("../src/libs/deact");
const App = require("./components/App");

Deact.render(App(), document.querySelector(".app"));

const appContainer = document.querySelector("app");
const header = document.createElement("h2");
header.innerHTML = "Hola Mundo, cometelo por su culo jiji";
// appContainer.appendChild(mainHeader);
