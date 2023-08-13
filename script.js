document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const clear = document.getElementById("clear");
    const decimal = document.getElementById("decimal")
    const DEL = document.getElementById("DEL")
    const equals = document.getElementById("equals");
    const btn0 = document.getElementById("zero");
    const btn1 = document.getElementById("one");
    const btn2 = document.getElementById("two");
    const btn3 = document.getElementById("three");
    const btn4 = document.getElementById("four");
    const btn5 = document.getElementById("five");
    const btn6 = document.getElementById("six");
    const btn7 = document.getElementById("seven");
    const btn8 = document.getElementById("eight");
    const btn9 = document.getElementById("nine");

    // Adding event listener for keyboard input
    document.addEventListener("keydown", handleKeyboardInput);

    // Add event listeners for button clicks
    plus.addEventListener("click", () => onscreenDisplay(plus.textContent));
    minus.addEventListener("click", () => onscreenDisplay(minus.textContent));
    multiply.addEventListener("click", () => onscreenDisplay(multiply.textContent));
    divide.addEventListener("click", () => onscreenDisplay(divide.textContent));
    equals.addEventListener("click", () => {
        const expression = display.textContent;
        const result = eval(expression); // Use eval to evaluate the expression
        display.textContent = result;
      });

      
      clear.addEventListener("click", () => {
        display.textContent = ""; // Clear the content of the display
      });
    
      // Handling delete, decimal, and numeric button clicks
    DEL.addEventListener("click", () => onscreenDisplay(DEL.textContent)); 
    decimal.addEventListener("click",() => onscreenDisplay(decimal.textContent));
    btn0.addEventListener("click", () => onscreenDisplay(zero.textContent));
    btn1.addEventListener("click", () => onscreenDisplay(one.textContent));
    btn2.addEventListener("click", () => onscreenDisplay(two.textContent));
    btn3.addEventListener("click", () => onscreenDisplay(three.textContent));
    btn4.addEventListener("click", () => onscreenDisplay(four.textContent));
    btn5.addEventListener("click", () => onscreenDisplay(five.textContent));
    btn6.addEventListener("click", () => onscreenDisplay(six.textContent));
    btn7.addEventListener("click", () => onscreenDisplay(seven.textContent));
    btn8.addEventListener("click", () => onscreenDisplay(eight.textContent));
    btn9.addEventListener("click", () => onscreenDisplay(nine.textContent));
    
// Function to update the display content
let onscreenDisplay = function (value) {
  if (value === "DEL") {
      // If remove button is clicked, remove the last character from the display
      display.textContent = display.textContent.slice(0, -1);
  } else {
      // Otherwise, append the clicked value to the display
      display.textContent += value;
  }
};

function evaluateExpression() {
  const expression = display.textContent;
  
  try {
      const result = eval(expression);
      display.textContent = result;
  } catch (error) {
      
      display.textContent = "Error"; // Handle errors, such as invalid expressions
  }
}



// Function to handle keyboard input
function handleKeyboardInput(event) {
  const key = event.key;
  
  if (!isNaN(key) || key === ".") {
      // If a valid numeric key or decimal point is pressed, update the display
      onscreenDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      // If an operator key is pressed, update the display
      onscreenDisplay(key);
  } else if (key === "Enter") {
      // If Enter key is pressed, evaluate the expression
      evaluateExpression();
  } else if (key === "Backspace") {
      // If Backspace key is pressed, remove the last character
      onscreenDisplay("DEL");
  }
}


//slider//

const draggable = document.querySelector(".slider-draggable");

const numbers = document.querySelectorAll(".number");

const circleSlider = document.querySelector(".circle-slider");

// Selecting the link element that controls the stylesheet (CSS)
const stylesheetLink = document.querySelector("#theme-stylesheet"); // This line finds a <link> tag that controls the styles

// Initializing the index of the currently selected number on the slider
let currentIndex = 0;

// Adding a click event listener to the "draggable" element
draggable.addEventListener("click", () => {
    // Calculate the new index for the slider's position,
    // wrapping around to the beginning if it exceeds the number of options
    currentIndex = (currentIndex + 1) % numbers.length;

    // Find the DOM element of the selected number using the new index
    const selectedNumber = numbers[currentIndex];

    // Get the bounding rectangle of the "circle-slider" container
    const sliderRect = circleSlider.getBoundingClientRect();

    // Get the bounding rectangle of the selected number element
    const numberRect = selectedNumber.getBoundingClientRect();

    // Calculate the new X position for the draggable element,
    // ensuring it's centered within the selected number
    const newPositionX = numberRect.left + numberRect.width / 2 - sliderRect.left;

    // Set the new left position of the draggable element
    draggable.style.left = newPositionX + "px";

    // Adjust the opacity of each number element based on the current index
    numbers.forEach((number, index) => {
        // If the index matches the current index, set full opacity; otherwise, reduce opacity
        number.style.opacity = index === currentIndex ? 1 : 0.5;
    });

    // Apply different stylesheets based on the current index
    if (currentIndex === 0) {
        stylesheetLink.href = "styles.css"; // Change to default stylesheet
    } else if (currentIndex === 1) {
        stylesheetLink.href = "styles2.css"; // Change to the second stylesheet
    } else if (currentIndex === 2) {
        stylesheetLink.href = "styles3.css"; // Change to the third stylesheet
    }
});

});