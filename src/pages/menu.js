
import {cleanContainer, getTableRow} from "../helpFunctions.js";

function setMenu(targetContainer) {
    cleanContainer(targetContainer);

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    targetContainer.appendChild(heading);

    addMainDishes(targetContainer);

    addBeverages(targetContainer);
}

function addMainDishes(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Main dishes";
    section.appendChild(heading);

    const table = document.createElement("table");
    table.appendChild(getTableRow("Dish", "Cost", true));
    table.appendChild(getTableRow("Pizza", "8€"));
    table.appendChild(getTableRow("Spaghetti Bolognese", "9€"));
    table.appendChild(getTableRow("Special Steak", "12€"));
    table.appendChild(getTableRow("Epic Tortilla", "10€"));
    section.appendChild(table);
}

function addBeverages(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Beverages";
    section.appendChild(heading);

    const table = document.createElement("table");
    table.appendChild(getTableRow("Beverage", "Cost", true));
    table.appendChild(getTableRow("Water", "0.5€"));
    table.appendChild(getTableRow("Beer", "2€"));
    table.appendChild(getTableRow("Lemonade", "1.5€"));
    section.appendChild(table);
}



export {setMenu};