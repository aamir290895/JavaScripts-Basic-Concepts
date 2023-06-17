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



//3.Immediately Invoked Function Expressions (IIFE):
// IIFE is a function that is executed immediately after it is defined. 
// It is wrapped inside parentheses to create a function expression and then invoked.

(function () {
  console.log('IIFE executed.');
})();


//4.Anonymous Functions:
//Anonymous functions do not have a name and are often used as callback functions or within higher-order functions.

var numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number * 20);
});



// 5. Higher-Order Functions:
// Higher-order functions are functions that can accept other functions as arguments or return functions as their result.
// They enable functional programming concepts such as map, filter, and reduce.

function operateOnNumbers(numbers, operation) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

function square(number) {
  return number * number;
}

var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = operateOnNumbers(numbers, square);

console.log(squaredNumbers);



// 6 .Recursive Functions:
// Recursive functions are functions that call themselves. 
//They are used when solving problems that can be divided into smaller, identical subproblems.


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

var result = factorial(5); // result = 120
console.log(result)


// explanation :

// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1

// 7. Generator Functions:
// Generator functions are special functions that can be paused and resumed, allowing for iterative and asynchronous programming.
// They use the function* syntax and the yield keyword.

function* fibonacci() {
  var a = 0;
  while (true) {
    a++;
    yield a;
  }
}

var fib = fibonacci();
console.log(fib.next().value); 
console.log(fib.next().value); 






  