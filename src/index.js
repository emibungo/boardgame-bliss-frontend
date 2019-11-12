import { create } from "istanbul-reports";

const entry = document.querySelector(".app");
render(create("header", ("h1", "Hello WOrld")), entry);

function render(child, parent) {
  parent.append(child);
}

function create(element, content) {
  const createdElement = document.createElement(element);

  if (content instanceof String) {
    createdElement.innerHTML = content;
  } else {
    createdElement.append(content);
  }
  return createdElement;
}
