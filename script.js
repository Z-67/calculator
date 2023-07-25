function add(a,b) {
    console.log(a+b);

}
add(1,2);

function subtract (a,b) {
    console.log(a-b);
}
subtract(2,2)

function multiply (a,b) {
    console.log(a*b);
}
multiply(5,5)
    
function divide (a,b) {
    console.log(a/b);
}
divide(10,2)

let number1
let number2
let operator 

function operate (num1,operator,num2) {
    switch (operator) {
        case '+' :
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
 console.log(operate(5,'+',433));