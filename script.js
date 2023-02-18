const numbers = document.querySelectorAll('div #numbers > button');
const symbols = document.querySelectorAll('div #symbols > button');
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
// 1 Bugs
// 2 Keyboard eventListeners 
// 3 Style 

numbers.forEach(button => {
    button.addEventListener('click', clearResult);
    button.addEventListener('click', getNumberClick);
});

symbols.forEach(button => {
    button.addEventListener('click', calculate);
});

backspaceBtn.addEventListener('click', backspace);
clearBtn.addEventListener('click', clearEverything);

function backspace() {
    display.value = display.value.slice(0, -1);
};

function calculate(e) {
    updateNumber()
    operate(a, operator, b)
    saveOperator(e)
    showResult() 
    updateCalcDisplay()
};

function clearResult() {
    if (!(typeof lastClick === 'number')) {
        clearDisplay()
    }
};

function getNumberClick(e) {
    lastClick = parseInt(e.target.value);
    updateDisplay(e)
};

function updateNumber() {
    console.log(typeof a + ': ' + a)
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

function clearEverything() {
    clearDisplay()
    clearCalcDisplay()
    a = null;
    b = null;
    sum = null;
    operator = null;
};

function clearDisplay() {
    display.value = null;
};

function clearCalcDisplay() {
    calcDisplay.value = null;
}

function backspace() {
    display.value = display.value.slice(0, -1);
};

function updateDisplay(e) {
    display.value += e.target.value;   
};

function updateCalcDisplay() {
    console.log(typeof a + ': ' + a)
    if (!(a === null) && b === null) {
        calcDisplay.value = `${a} ${operator}`;
    } else if (!(a === null) && !(b === null)){
        calcDisplay.value = `${sum} ${operator}`;
    } 
    // doesn't work
    // else if (a === null) {
    //     calcDisplay.value = `${operator}`;
    // }
}; 

function showResult() {
    console.log(typeof a + ': ' + a)
    if (!Number.isInteger(sum) && !(sum === null)) {
        display.value = sum.toFixed(2);
    } else if (Number.isInteger(sum)) {
        display.value = sum;
    }
};

function saveOperator(e) {
    console.log(typeof a + ': ' + a)
    if (lastClick === '+' || lastClick === '-' || lastClick === '*' || lastClick === '/') {
        clearEverything();
        calcDisplay.value = null;
        display.value = "ERROR! Press: AC."
    } else {
        lastClick = e.target.value;
        operator = e.target.value;
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
        display.value = "ERROR! Press: AC."
        return display.value;
    }
};

function operate(a, operator, b) {
    console.log(typeof a + ': ' + a)
    if (operator === '+' && typeof lastClick === 'number' ) {
        sum = add(a, b);
    } else if (operator === '-') {
        sum = subtract(a, b);
    } else if (operator === '*') {
        sum = multiply(a, b);
    } else if (operator === '/') {
        sum = divide(a, b);
    }  
};