let map = new Map();
function goTree (element) {
    if (map.has(element.tagName)) {
        let val = map.get(element.tagName);
        map.set(element.tagName, val+1);
    }
    else {
        map.set(element.tagName, 1)
    }
    for (const child of element.children) {
        goTree(child);
    }
}
const lst2 = document.documentElement;
goTree(lst2);
console.log(map);

function createTable (map) {
    const table = document.createElement("table");
    for (const [tag, val] of map.entries()) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = tag;
        cell2.textContent = val;
    }
    document.body.appendChild(table);
}

createTable(map);





