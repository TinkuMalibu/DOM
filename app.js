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

primerTopping.style.backgroundColor = 'green';
primerTopping.style.color = 'orange';
primerTopping.style.textTransform = 'uppercase';

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
console.log(firstTopping.classList);




















// Path: app.js
