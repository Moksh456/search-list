
const billitems = [
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

const table  = document.querySelector(".table1")
const searchInput = document.querySelector("input")

const createTableHeader = function(){
  const HEaderRow = document.createElement("tr");
  const idElement = document.createElement("th")
  idElement.innerHTML = "s.n"
  const itemNAme = document.createElement("th")
  itemNAme.innerHTML = "Poduct Name"
  const price = document.createElement("th")
  price.innerHTML = "Pice";

  HEaderRow.appendChild(idElement,itemNAme, price);
  table.apendChild("HEaderRow") 
} 

const createTableBody = function (){

}

const createTable = function(){
  reateTableHeader();
  createTableBody();  
}