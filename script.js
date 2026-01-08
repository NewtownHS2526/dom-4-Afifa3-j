console.log("script running");

let totalIncent = 0;



const popcornButton  = document.querySelector("#popcorn");
const sodaButton = document.querySelector("#soda");
const candyButton = document.querySelector("#candy");
const nachosButton = document.querySelector("#nachos");
const icecreamButton = document.querySelector("#icecream");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");




console.log(popcornButton, sodaButton, candyButton, nachosButton, icecreamButton, shoppingCart, totalSpan);

const updateTotal  = () => {
  totalSpan.innerHTML = totalIncent / 100;
};

const addPopcorn = () => {
  shoppingCart.innerHTML += '<p>popcorn</p>';
  totalIncent += 450;
  updateTotal();
};

popcornButton.addEventListener("click", addPopcorn);

 const addSoda = () => {
  shoppingCart.innerHTML += '<p>soda</p>';
  totalIncent += 250;
  updateTotal();
 };

sodaButton.addEventListener("click", addSoda);

const addCandy = () => {
  shoppingCart.innerHTML += '<p>candy</p>';
  totalIncent += 175 ;
  updateTotal();
};
candyButton.addEventListener("click", addCandy);

 const addNachos = () => {
  shoppingCart.innerHTML += '<p>nachos</p>';
  totalIncent += 500;
  updateTotal();
 };

nachosButton.addEventListener("click", addNachos);

const addIcecream = () => {
  shoppingCart.innerHTML += '<p>icecream</p>';
  totalIncent += 325 ;
  updateTotal();
};
icecreamButton.addEventListener("click", addIcecream);  

