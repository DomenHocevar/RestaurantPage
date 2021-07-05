
import {cleanContainer, cleanMain} from "../index.js";

function setContact(targetContainer) {
    cleanContainer(targetContainer);

    const heading = document.createElement("h1");
    heading.textContent = "Contact";
    targetContainer.appendChild(heading);
}

export {setContact};