var billitem =[
    list1 = {
    id: 1,
    Itemname: "butter",
    price: 250,
},
{
      id: 2,
    Itemname: "Bread",
    price: 150,
},
{
    id: 3,
    Itemname: "onion",
    price: 50,
},
{
    id: 4,
    Itemname: "chini",
    price: 46,
},{
    id: 5,
    Itemname: "dal",
    price: 65,
},{
    id: 6,
    Itemname: "biryani",
    price: 75,
},{
    id: 7,
    Itemname: "halwa",
    price: 55,
},
{
    id: 8,
    Itemname: "chilli",
    price: 55,
},
{
    id: 9,
    Itemname: "patato",
    price: 25,
},
{
    id: 10,
    Itemname: "badam",
    price: 800,
}  
] 


let input = document.querySelector("input");
let table1 = document.querySelector(".table1");

function createTAbleHEader(){
  //creating header
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th.innerText = "id";
    th1.innerText = "Itemname";
    th2.innerText = "price";
    tr.append(th, th1, th2);
    table1.append(tr);
}
function createlist (){
    //creating table rows
    billitem.forEach((item) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td.innerText = item.id;
        td1.innerText = item.Itemname;
        td2.innerText = item.price;
        tr.append(td, td1, td2);
        table1.append(tr);
    });}
 

createTAbleHEader();
createlist();
/*<tr>
                <th>id</th>
                <th>Itemname</th>
                <th>price</th>
            </tr>
            <tbody id="table">
                <!-- Table rows will be inserted here by JavaScript -->
            </tbody>*/


