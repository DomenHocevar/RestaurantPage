
function cleanContainer(container) {
    const childrenArray = Array.from(container.childNodes);
    childrenArray.forEach(child => container.removeChild(child));
}

function getTableTitleRow(left, right) {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = left;
    const cell2 = document.createElement("td");
    cell2.textContent = right;
    row.appendChild(cell1);
    row.appendChild(cell2);

    return row;
}

function getTableRow(left, right, title) {
    let type = "td";
    if (title) {
        type = "th";
    }
    const row = document.createElement("tr");
    const cell1 = document.createElement(type);
    cell1.textContent = left;
    const cell2 = document.createElement(type);
    cell2.textContent = right;
    row.appendChild(cell1);
    row.appendChild(cell2);

    return row;
}

export {cleanContainer, getTableRow};