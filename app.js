/*const theTitle = document.getElementById('title');

const topping = document.getElementsByClassName('topping');
console.log(topping[2].innerText);

const misToppings = document.getElementsByTagName("li");
console.log(misToppings);

const toppingBrownBackground = document.getElementsByClassName('topping brown-background');
console.log(toppingBrownBackground);

const firstOrangeTopping = document.querySelector('.topping.orange-background');
console.log(typeof firstOrangeTopping);

const allOrangeToppings = document.querySelectorAll('.topping.orange-background');
console.log(allOrangeToppings.length)
console.log(allOrangeToppings[0]);
console.log(allOrangeToppings[1]);
*/

const primerTopping = document.querySelector('.topping');
console.log(primerTopping);
/*
primerTopping.style.backgroundColor = 'green';
primerTopping.style.color = 'orange';
primerTopping.style.textTransform = 'uppercase';
*/

const toppingList = document.getElementById('topping-list');
console.log("> innerText:");
console.log(toppingList.innerText);
console.log("> textContent:");
console.log(toppingList.textContent);
console.log("> innerHTML:");
console.log(toppingList.innerHTML);

const title = document.getElementById('title');
console.log(title.innerText);
title.innerText = 'Choose toppings';
title.style.fontSize = '4em';
title.style.color = 'grey';

const enlace = document.getElementsByTagName('a');
console.log(enlace[0].setAttribute('href', 'https://www.google.com'));

const firstTopping = document.querySelector('.topping');
firstTopping.classList.add('blue-background');
console.log(firstTopping.classList.contains('blue-background')); //verificar si tiene una clase
firstTopping.classList.remove('blue-background');
console.log(firstTopping.classList);

// create a new DOM element
// 1. locate where to create it
// 2. create it, using document.createElement
// 3. add it to the DOM, using append or appendChild
// 4. remove it from the DOM, using remove
const theToppingList = document.getElementById('topping-list');
const newTopping = document.createElement('li');
newTopping.innerText = 'Extra cheese';
newTopping.classList.add('topping', 'brown-background');
theToppingList.append(newTopping);
newTopping.remove("newTopping");

// Browse the DOM
// With parentNode and parentElement
// with children that returns an HTMLCollection, objetc with an index
const toppingListOfIngredientes = document.getElementById('topping-list');
console.log('con firtsElementChild: ')
console.log(toppingListOfIngredientes.firstElementChild);
console.log('con children: ')
console.log(toppingListOfIngredientes.children[0]);






























// Path: app.js
