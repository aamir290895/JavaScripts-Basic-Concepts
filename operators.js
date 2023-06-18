export function operators(operation, num1, num2) {

  let result ;
    switch (operation) {
        case "add":
            result = num1 + num2; 
            break;
        case "subtract":
           result = num1 - num2; 
           break;
        default:
          result = "Please enter valid data;"
          break;
      }
      

   
  return result


}


function learnOperators(a, b) {


    console.log("addition : "  ,  (a + b));
    console.log("substraction : " ,  (a - b));
    console.log("multiplication : " ,  (a * b));
    console.log("divide : " ,  (a / b));
    console.log("Equality : " ,  (5 == "5"));
    console.log("Strictly Equal : " ,  (5 === "5")); // it checks the data type equality and value both
    console.log("Postfix increment" ,  (a++));
    console.log("Prefix increment" ,  (++a)); 
    console.log("addition" ,  (2 ** 3));
    console.log("shifting" , (10 >> 1));  //the right shift (>>) operator is a bitwise operator that performs a bitwise right shift operation on the binary representation of a number
    console.log("addition" +  (a + b));

}


learnOperators(5 , 7);

