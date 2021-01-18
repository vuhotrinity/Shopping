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

function deleteProducts() {
  console.log(document.getElementById("row"));
}

function deleteProducts(productName) {
  let cartItems = localStorage.getItem("productsInCart");
  // console.log(insideValue)
  cartItems = JSON.parse(cartItems);

  console.log(cartItems); //new cart
  for (let i = 0; i < Object.values(cartItems).length; i++) {
    let newCart = Object.values(cartItems)[i];
    if (productName == newCart.name) {
      // console.log( newCart)
      //    ;
      localStorage.removeItem('productsIncart'[productName])
          console.log( cartItems);
          // localStorage.removeItem('${Object.keys(cartItems)[0]}')
      //     localStorage.removeItem('IPHONE X')
      //     // console.log(newCart )
      console.log(newCart )
    } else {
    }
  }
}
