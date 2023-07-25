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

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const clear = document.getElementById("clear");
    const equals = document.getElementById("equals");
    const btn0 = document.getElementById("0");
    const btn1 = document.getElementById("1");
    const btn2 = document.getElementById("2");
    const btn3 = document.getElementById("3");
    const btn4 = document.getElementById("4");
    const btn5 = document.getElementById("5");
    const btn6 = document.getElementById("6");
    const btn7 = document.getElementById("7");
    const btn8 = document.getElementById("8");
    const btn9 = document.getElementById("9");

    // Add event listeners for button clicks
    plus.addEventListener("click", () => onscreenDisplay(plus.textContent));
    minus.addEventListener("click", () => onscreenDisplay(minus.textContent));
    multiply.addEventListener("click", () => onscreenDisplay(multiply.textContent));
    divide.addEventListener("click", () => onscreenDisplay(divide.textContent));

    btn0.addEventListener("click", () => onscreenDisplay(btn0.textContent));
    btn1.addEventListener("click", () => onscreenDisplay(btn1.textContent));
    btn2.addEventListener("click", () => onscreenDisplay(btn2.textContent));
    btn3.addEventListener("click", () => onscreenDisplay(btn3.textContent));
    btn4.addEventListener("click", () => onscreenDisplay(btn4.textContent));
    btn5.addEventListener("click", () => onscreenDisplay(btn5.textContent));
    btn6.addEventListener("click", () => onscreenDisplay(btn6.textContent));
    btn7.addEventListener("click", () => onscreenDisplay(btn7.textContent));
    btn8.addEventListener("click", () => onscreenDisplay(btn8.textContent));
    btn9.addEventListener("click", () => onscreenDisplay(btn9.textContent));

    // Function to update the display content
    let onscreenDisplay = function (value) {
        display.textContent += value;
    };
});
    

