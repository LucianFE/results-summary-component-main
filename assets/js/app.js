"use strict";
const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const components = document.querySelector(".components");
window.addEventListener("DOMContentLoaded", displayData);

function displayData() {
  const elements = data
    .map((item) => {
      return `<div class="component ${item.category.toLowerCase()} flex">
        <div class="left flex">
          <img src="${item.icon}" />
          <p>${item.category}</p>
        </div>
        <div class="right">
          <p>${item.score}<span>/100</span></p>
        </div>
      </div>`;
    })
    .join("");
  components.innerHTML = elements;
}
