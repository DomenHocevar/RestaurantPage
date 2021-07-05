
import {cleanContainer} from "../index.js";

function setMenu(targetContainer) {
    cleanContainer(targetContainer);

    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    targetContainer.appendChild(heading);
}

export {setMenu};