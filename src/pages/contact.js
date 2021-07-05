
import {cleanContainer, getTableRow} from "../helpFunctions.js";

function setContact(targetContainer) {
    cleanContainer(targetContainer);

    const heading = document.createElement("h1");
    heading.textContent = "Contact";
    targetContainer.appendChild(heading);

    addContactInformation(targetContainer);
}

function addContactInformation(targetContainer) {
    const section = document.createElement("section");
    targetContainer.appendChild(section);

    const heading = document.createElement("h2");
    heading.textContent = "Contact information";
    section.appendChild(heading);

    const table = document.createElement("table");
    table.appendChild(getTableRow("Telephone number", "123 123 321 321"));
    table.appendChild(getTableRow("E-mail", "realEmail@abc.com"));
    table.appendChild(getTableRow("Fax", "Sorry no fax"));
    section.appendChild(table);
}

export {setContact};