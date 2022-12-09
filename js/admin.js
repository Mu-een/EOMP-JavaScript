// sample data
let products = JSON.parse(localStorage.getItem('products')) 
// JSON.parse(localStorage.getItem('products')) : [
//     {
//         id: 1,
//         image:"https://i.postimg.cc/tC9Fzw88/pennyblackout.jpg",
//         productName: "Penny Blackout",
//         type:"Penny",
//         price:"R1200.00",
//     },
//     {
//         id: 2,
//         image:"https://i.postimg.cc/vZk3znC4/birdhouseskateboard-stage-3.jpg",
//         productName: "BIRDHOUSE Skateboard Stage 3",
//         type:"Skateboard",
//         price:"R1300.00",
//     },
//     {
//         id: 3,
//         image:"https://i.postimg.cc/KYMgqjR0/Sector-9-Fault-Line-Curl-39-5-Longboard-Complete-356967-front-US-1.webp",
//         productName: "Sector 9 Fault Line Curl Longboard",
//         type:"Longboard",
//         price:"R3500.00",
//     },
//     {
//         id: 4,
//         image:"https://i.postimg.cc/NFdhr1vF/7-25-Skull-Mini-Blue-teste.png",
//         productName: "BIRDHOUSE Tony Hawk Oversized Skull Mini Skateboard",
//         type:"Skateboard",
//         price:"R1300.00",
//     },
//     {
//         id: 5,
//         image:"https://i.postimg.cc/JzMQbzRD/elementboard.png",
//         productName: "Element Section",
//         type:"Skateboard",
//         price:"R1300.00",
//     },
//     {
//         id: 6,
//         image:"https://i.postimg.cc/jdfY9Z00/s9-bambino-shorebreak.jpg",
//         productName: "Sector 9 Bambino Shorebreak Longboard",
//         type:"Longboard",
//         price:"R2500.00",
//     }
// ];

// admin table
function tableProducts () {
    products.forEach((products)=>{
        document.querySelector('.tbody').innerHTML += `
        <tr>
            <td class="id">${products.id}</td>
            <td>${products.productName}</td>
            <td>${products.type}</td>
            <td>${products.price}</td>
            <td><button class="w-75 edit-btn">Edit</button></td>
            <td><button class="w-75 del-btn" id="deleteBtn" onclick="deleteRow(${products.id})">Delete</button></td>
        </tr>`
    })
}
tableProducts();

// delete row in table
function deleteRow(){
    document.querySelector('.tbody').innerHTML += ``
    localStorage.setItems('products',JSON.stringify(products));
    // document.querySelector('#deleteBtn');
    let products = JSON.parse(localStorage.getItem('products'));
    products.splice(id, 1);
    localStorage.setItem('products',JSON.stringify(products));
}


// local storage
localStorage.setItem('products',JSON.stringify(products));
localStorage.getItem('products')

// sort button

