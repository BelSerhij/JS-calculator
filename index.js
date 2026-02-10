const operators = ["+", "-", "*", "/", "%", "×", "÷", "."];
const displayOne = document.getElementById('display-1');
const display = document.getElementById('display-2');

function appendToDisplay(input) {
    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
    displayOne.value = "";
}

function handleMath(input) { 
    const lastChar = display.value.slice(-1);
    
     if (operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + input;;
    } else {
    display.value += input;
    }
    displayOne.value = "";
}

  
function clearDisplay() { 
    display.value = "";
    displayOne.value = "";
}

function calculateResult() {
    let expression = display.value;

    expression = expression.replace(/х/g, '*');
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/%/g, '/100');

    try {
        display.value = eval(expression);
        displayOne.value = expression;
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    let expression = display.value;

    if (expression === "" || expression === "0")
        return;
    if (expression.startsWith ("-")) {
        display.value = expression.slice(1);
    }
    else { 
        display.value = "-" + expression;
        }
}
    
function deleteLast() { 
    display.value = display.value.slice(0, -1); 
     
    if (display.value === "") {
    display.value = "0"; 
  }
}