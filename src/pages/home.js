
import {cleanContainer, getTableRow} from "../helpFunctions.js";
import FoodImage from "../images/food.jpg";
import LocationImage from "../images/location.jpg";

function setHome(targetContainer) {
    cleanContainer(targetContainer);

    const heading = document.createElement("h1");
    heading.textContent = "Home";
    targetContainer.appendChild(heading);

    addAboutUs(targetContainer);

    addSchedule(targetContainer);

    addLocation(targetContainer);
}

function addAboutUs(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "About us";
    section.appendChild(heading);

    const span = document.createElement("span");
    span.textContent = "We offer a diverse array of culinary excitement with a heavy dose of tradition as we have served our guests since 1899.";
    section.appendChild(span);

    const image = document.createElement("img");
    image.src = FoodImage;
    section.appendChild(image);
}

function addSchedule(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Schedule";
    section.appendChild(heading);

    const table = document.createElement("table");
    table.appendChild(getTableRow("Monday", "9.00 - 16.00"));
    table.appendChild(getTableRow("Tuesday", "9.00 - 16.00"));
    table.appendChild(getTableRow("Wednesday", "9.00 - 16.00"));
    table.appendChild(getTableRow("Thursday", "9.00 - 16.00"));
    table.appendChild(getTableRow("Friday", "9.00 - 16.00"));
    table.appendChild(getTableRow("Saturday", "8.00 - 19.00"));
    table.appendChild(getTableRow("Sunrday", "12.00 - 19.00"));
    section.appendChild(table);

}

function addLocation(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Location";
    section.appendChild(heading);

    const span = document.createElement("span");
    span.textContent = "The restaturant is located on a picturesque location in BigCity, Avenue 5."
    section.appendChild(span);

    const image = document.createElement("img");
    image.src = LocationImage;
    section.appendChild(image);
}

export {setHome};