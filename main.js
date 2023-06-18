import { Player } from './oops.js';

import { factorial }  from './functions.js';

import { operators } from './operators.js';

var player = new Player("dhoni" , 40, "180cm")

const iterator = player.play();

 console.log(iterator.next().value);
 console.log(iterator.next().value);
 console.log(iterator.next().value);

export function callButton() {

    let res = document.getElementById("uu").innerText = factorial(5)

    return res;
}

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", callButton);

function calculate() {
    let operation = document.getElementById("operation").value;
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(operation, num1 ,num2);
    let res = operators(operation, num1, num2);
    document.getElementById("result").innerHTML = `<h1>Your response is ${res}</h1>`;
}

  



const myButton2 = document.getElementById("btn2");
myButton2.addEventListener("click", calculate);
















 
