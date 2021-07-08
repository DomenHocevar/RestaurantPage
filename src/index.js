
import "./style.css";
import {setHome} from "./pages/home.js";
import {setMenu} from "./pages/menu.js";
import {setContact} from "./pages/contact.js";

function getHeader(params) {
    const header = document.createElement("header");

    function getButton(name) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = name;
        
        let targetFunction;
        if (name == "Home") targetFunction = setHome;
        if (name == "Menu") targetFunction = setMenu;
        if (name == "Contact") targetFunction = setContact;

        button.addEventListener("click", function (params) {
            targetFunction(main);
        });
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




const body = document.querySelector("body");
const main = document.createElement("main");
const footer = getFooter();



body.appendChild(getHeader());
body.appendChild(main);
body.appendChild(footer);

setHome(main);



