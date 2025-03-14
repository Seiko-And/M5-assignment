/*
The Basic Calculator
You will ask the user for a number, a second number, 
and then finally ask them what kind of operation they want to perform,
either add, subtract, multiply, or divide.
Depending on what they select, you will perform that operation
*/


// COLLECT FIRST NUMBER FROM USER
let num1 = parseFloat(prompt('Please enter the first number.'));
    console.log(num1);
    console.log(isNaN(num1));
while (isNaN(num1)){
    alert('Invalid number. Please enter the first number'); 
    num1 = parseFloat(prompt('Please enter the first number.'));
}
 

// COLLECT SECOND NUMBER FROM USER
let num2 = parseFloat(prompt('Please enter the second number.'));
while (isNaN(num2)){
    alert('Invalid number. Please enter a number'); 
    num2 = parseFloat(prompt('Please enter the second number.'));
}

 // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operator;
do{
    operator = prompt('Please enter an oparator that you would like to perform.\nExample: \nAdd : +            Subtract : - \nMultiply : *       Divide : / ');
    if ((operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/')){
        alert('Invalid. Please enter an oparator that you would like to perform. ');
    }
}
while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/');


// // ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,operator){

    let result;

    // Perform calculation based on the operator
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        default:
            alert('Invalid operation');
            return;
    }
    alert(`The result is: ${result}`);
    return result;
}
calculate(num1, num2, operator);

// For testing
console.log(num1);
console.log(num2);
console.log(operator);










