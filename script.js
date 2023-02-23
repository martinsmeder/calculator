const numbers = document.querySelectorAll('div #numbers > button');
const symbols = document.querySelectorAll('div #symbols > button');
const plusMinus = document.querySelector('#plusMinus');
const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');
const calcDisplay = document.querySelector('#calcDisplay');
const display = document.querySelector('#display');

let a = null;
let b = null;
let operator = null;
let sum = null;
let lastClick = null; 

// TO DO:
// 1. Style 
// https://dev.to/hussein_ouda/currency-converter-calculator-4goe

// handle click events
numbers.forEach(button => {
    button.addEventListener('click', clearResult);
    button.addEventListener('click', getNumberClick);
});

symbols.forEach(button => {
    button.addEventListener('click', calculate);
});

plusMinus.addEventListener('click', convertNumber)
backspaceBtn.addEventListener('click', backspace);
clearBtn.addEventListener('click', clearEverything);

function backspace() {
    display.value = display.value.slice(0, -1);
};

// handle keyboard events
document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      let button = document.querySelector(`div #numbers > button[value="${e.key}"]`);
      if (button) {
        clearResult();
        getNumberClick({target: button});
      }
    }
    else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      let button = document.querySelector(`div #symbols > button[value="${e.key}"]`);
      if (button) {
        calculate({target: button});
      }
    }
    else if (e.key === ".") {
      let button = document.querySelector(`div #numbers > button[value="."]`);
      if (button) {
        clearResult();
        getNumberClick({target: button});
      }
    }
    else if (e.key === "=" || e.key === "Enter") {
      let button = document.querySelector(`div #symbols > button[value="="]`);
      if (button) {
        calculate({target: button});
      }
    }
    else if (e.key === "Backspace") {
      backspace();
    }
    else if (e.key === "Escape") {
      clearEverything();
    }
    console.log(e)
});

// handle click events
numbers.forEach(button => {
    button.addEventListener('click', clearResult);
    button.addEventListener('click', getNumberClick);
});

symbols.forEach(button => {
    button.addEventListener('click', calculate);
});

plusMinus.addEventListener('click', convertNumber)
backspaceBtn.addEventListener('click', backspace);
clearBtn.addEventListener('click', clearEverything);

// functions
function calculate(e) {
    if (lastClick === '+' || lastClick === '-' || lastClick === '*' || lastClick === '/') {
        updateCalcDisplay;
        lastClick = e.target.value;
        operator = e.target.value;
        saveOperator(e)
    } else {
        updateNumber()
        operate(a, operator, b)
        saveOperator(e)
        showResult() 
        updateCalcDisplay()
    } 
};

function operate(a, operator, b) {
    if (a === null || Number.isNaN(a)) {
        clearEverything()
        display.value = "Start with a number! Click: AC"
        return;
    }

    if (operator === '+') {
        sum = add(a, b);
    } else if (operator === '-') {
        sum = subtract(a, b);
    } else if (operator === '*') {
        sum = multiply(a, b);
    } else if (operator === '/') {
        sum = divide(a, b);
    }  
};

function add(a, b) {
    return a + b;
}; 

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b; 
};

function divide(a, b) {
    if (!(b === 0)) {
        return a / b; 
    } else {
        clearEverything()
        display.value = "Can't divide by 0! Click: AC"
        return;
    }
};

function getNumberClick(e) {
    lastClick = parseInt(e.target.value);
    updateDisplay(e)
};

function saveOperator(e) {
    if (lastClick === '+' || lastClick === '-' || lastClick === '*' || lastClick === '/') {
        updateCalcDisplay()
        lastClick = e.target.value;
        operator = e.target.value;
    } else {
        lastClick = e.target.value;
        operator = e.target.value;
    }
};

function convertNumber(num) {
    num = parseFloat(display.value);
    if (num > 0) {
        display.value = -num;
    } else if (num < 0) {
        display.value = -(num);
    } else if (num = 0) {
        display.value = num
    } 
};

function updateNumber() {
    if (a === null) {
        a = parseFloat(display.value);
    } else if (!(a === null) && b === null) {
        b = parseFloat(display.value);
    } else if (!(a === null) && !(b === null)) {
        a = sum;
        b = parseFloat(display.value);
    }
    clearDisplay()
};

function showResult() {
    if (!Number.isInteger(sum) && !(sum === null)) {
        display.value = sum.toFixed(2);
    } else if (Number.isInteger(sum)) {
        display.value = sum;
    }
};

function updateDisplay(e) {
    display.value += e.target.value;  

};

function updateCalcDisplay() {
    if (a === null) {
        a = parseFloat(a)
    }

    if (!Number.isNaN(a) && b === null) {
        calcDisplay.value = `${a} ${operator}`;
    } else if (!Number.isNaN(a) && b !== null && Number.isInteger(sum)) {
        calcDisplay.value = `${sum} ${operator}`;
    } else if (!Number.isNaN(a) && b !== null && !Number.isInteger(sum)) {
        calcDisplay.value = `${sum.toFixed(2)} ${operator}`;
    } else if (Number.isNaN(a)) {
        calcDisplay.value = `${operator}`;
    }
}; 

function backspace() {
    display.value = display.value.slice(0, -1);
};

function clearResult() {
    if (!(typeof lastClick === 'number')) {
        clearDisplay()
    }
};

function clearDisplay() {
    display.value = null;
};

function clearCalcDisplay() {
    calcDisplay.value = null;
};

function clearEverything() {
    clearDisplay()
    clearCalcDisplay()
    a = null;
    b = null;
    sum = null;
    operator = null;
};