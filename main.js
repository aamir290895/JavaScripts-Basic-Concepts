import { Player } from './oops.js';

import { factorial }  from './functions.js';

var player = new Player("dhoni" , 40, "180cm")

const iterator = player.play();

 console.log(iterator.next().value);
 console.log(iterator.next().value);
 console.log(iterator.next().value);


function callButton() {

    let res = document.getElementById("uu").innerText = factorial(5)

    return res;
}

callButton()






 
