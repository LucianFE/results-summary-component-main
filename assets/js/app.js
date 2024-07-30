"use strict";
import data from "../../data.js";
console.log(data);

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
