"use strict";
const url = "../../data.json";
async function getData(url, selector) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something goes wrong");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    selector.innerHTML = `<p>There was an error with your data....</p>`;
  }
}

const components = document.querySelector(".components");
window.addEventListener("DOMContentLoaded", async () => {
  const allData = await getData(url, components);
  try {
    if (!allData) {
      throw new Error("There is no data....");
    }
    const elements = allData
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
  } catch (error) {
    components.innerHTML = `<p>There was an error with your data....</p>`;
  }
});
