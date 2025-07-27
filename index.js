
const billitem = [
  { id: 1, Itemname: "butter", price: 250 },
  { id: 2, Itemname: "Bread", price: 150 },
  { id: 3, Itemname: "onion", price: 50 },
  { id: 4, Itemname: "chini", price: 46 },
  { id: 5, Itemname: "dal", price: 65 },
  { id: 6, Itemname: "biryani", price: 75 },
  { id: 7, Itemname: "halwa", price: 55 },
  { id: 8, Itemname: "chilli", price: 55 },
  { id: 9, Itemname: "patato", price: 25 },
  { id: 10, Itemname: "badam", price: 800 }
];

const table = document.querySelector(".table1");

function createTableHeader() {
  const headerRow = document.createElement("tr");
  ["S.N", "Item Name", "Price"].forEach(title => {
    const th = document.createElement("th");
    th.textContent = title;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
}

function createTableBody() {
  const frag = document.createDocumentFragment();
  billitem.forEach(item => {
    const tr = document.createElement("tr");
    [item.id, item.Itemname, item.price].forEach(val => {
      const td = document.createElement("td");
      td.textContent = val;
      tr.appendChild(td);
    });
    frag.appendChild(tr);
  });
  table.appendChild(frag);
}

function createTable(){
    table.innerHTML = "";
    createTableHeader();
    createTableBody();
}

