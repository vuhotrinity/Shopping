function displayCart() {
  let navigationContainer = document.getElementById("navigation-container");
  navigationContainer.innerHTML = "";
  let HTML = `
    <a  href = "../html/mainPage.html">Main</a>
        <a  href="#"> Product</a>
        <a  href="#"> Contact</a>
  

        <button id='cart-button' type="submit"><i class="fa fa-shopping-cart" aria-hidden="true"></i> <span id="cart-number">${localStorage.getItem(
          "cartNumbers"
        )}</span>
            
        </button>
    `;
    
  navigationContainer.innerHTML += HTML;
  
}
displayCart();

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function myListPhones() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  console.log(Object.values(cartItems));
  let newPhone = document.getElementById("list-phones");
  newPhone.innerHTML = " ";
  for (let i = 0; i < Object.values(cartItems).length; i++) {
    let newCart = Object.values(cartItems)[i];
    let HTML = `
      <tr>
      <td id='name'>${newCart.name}</td>
      <td><span>${formatNumber(newCart.price)} VND</span> </td>
      <td> <span >${newCart.incart} </span> </td>
      <td><span>${formatNumber(newCart.price * newCart.incart)} VND</span> </td>
      <td><button id='deleteBtn' onclick='deleteProducts("${
        newCart.name
      }")'  type="submit">Delete</button></td>

  </tr>
      `;

    newPhone.innerHTML += HTML;
  }
}
myListPhones();

function displayTotal() {
  let totalPrice = localStorage.getItem("totalCost");
  let totalCost = document.getElementById("totalCost");
  totalCost.innerHTML = "";
  let priceSum = `
      <h4 id="totalCost">TOTAL: ${formatNumber(totalPrice)} VND</h4>

      `;
  totalCost.innerHTML += priceSum;
}
displayTotal();
let newName = document.getElementById("name");



function deleteProducts(productName) {
  let deleteBtn = document.getElementById('deleteBtn');
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let newPhone = document.getElementById("list-phones");
  console.log(newPhone)
  let tr = document.getElementsByTagName('tr')[1];
  console.log(tr)
  
  for (let i = 0; i < Object.values(cartItems).length; i++) {
    let newCart = Object.values(cartItems)[i];

    if (productName == newCart.name ) {
      

    
         

       
      let totalMoney = localStorage.getItem('totalCost');


     totalMoney = JSON.parse(totalMoney);
     totalMoney = totalMoney - ((cartItems[productName]).price  * (cartItems[productName]).incart );
     localStorage.setItem('totalCost', JSON.stringify(totalMoney))


     let cart = localStorage.getItem('cartNumbers');
      cart = JSON.parse(cart);
      cart = cart - (cartItems[productName]).incart;
      localStorage.setItem('cartNumbers',cart)
     delete cartItems[productName];
     localStorage.setItem('productsInCart', JSON.stringify(cartItems));
     alertify.success("DELETE SUCCESSFULLY!");
     window.location.reload();

      
     
     
     
   
     }
  }
}


