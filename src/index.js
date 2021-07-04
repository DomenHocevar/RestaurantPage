
import "./style.css";


function getHeader(params) {
    const header = document.createElement("header");

    function getButton(name) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = name;
        return button;
    }
    
    header.appendChild(getButton("Home"));
    header.appendChild(getButton("Menu"));
    header.appendChild(getButton("Contact"));

    return header;    
}

function getFooter(params) {
    const footer = document.createElement("footer");
    footer.textContent = "My github profile: https://github.com/DomenHocevar"

    return footer;
}

function setHome(params) {
    
}

function setMenu(params) {
    
}

function setContact(params) {
    
}



const body = document.querySelector("body");
const main = document.createElement("main");
const footer = getFooter();

body.appendChild(getHeader());
body.appendChild(main);
body.appendChild(footer);




