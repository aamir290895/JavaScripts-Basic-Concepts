//1. Regular Functions:
// Regular functions are defined using the function keyword. 
// They can have parameters and a return value. These functions are reusable blocks of code that can be called multiple times.

function add(a, b) {
    return a + b;
  }
  
var result = add(5, 10); // result = 15
console.log(result);




// 2.Arrow Functions:
// Arrow functions are a concise syntax introduced in ES6.
// They provide a shorter syntax for defining functions. 
// Arrow functions have implicit returns and do not bind their own this value.


const addNum = (a, b) => a + b;
const result2 = addNum(5, 20); // result = 25
console.log(result2);



  