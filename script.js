const numbers = document.querySelectorAll('div #numbers > button');
const symbols = document.querySelectorAll('div #symbols > button');
const clearBtn = document.querySelector('#clear');
const display = document.querySelector('#display');
let a = null;
let b = null;
let operator = null;
let sum = null;
let lastClick = null; 

// TO DO:
// 1 Add . 
// 2 Fix bugs?
// 3 More functionality?
// 4 Keyboard eventListeners
// 4 Style
numbers.forEach(button => {
    button.addEventListener('click', clearResult);
});

numbers.forEach(button => {
    button.addEventListener('click', getNumberClick);
});

symbols.forEach(button => {
    button.addEventListener('click', calculate);
});

clearBtn.addEventListener('click', clearEverything);

function calculate(e) {
    if (!(e.target.value === '=')) {
        updateNumber()
        operate(a, operator, b)
        saveOperator(e)
        showResult()
    } else if (e.target.value === '=') {
        updateNumber()
        operate(a, operator, b)
        showResult()
    }
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
    if (a === null) {
        a = parseInt(display.value);
    } else if (!(a === null) && b === null) {
        b = parseInt(display.value);
    } else if (!(a === null) && !(b === null)) {
        a = sum;
        b = parseInt(display.value);
    }
    clearDisplay()
};

function clearEverything() {
    clearDisplay()
    a = null;
    b = null;
    sum = null;
    operator = null;
};

function clearDisplay() {
    display.value = null;
};

function updateDisplay(e) {
    display.value += e.target.value;   
};

function showResult() {
    display.value = sum;
    console.log(sum)
};

function saveOperator(e) {
    lastClick = e.target.value;
    operator = e.target.value;
    return operator;
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
    

    if (operator === '+') {
        sum = add(a, b);
    } else if (operator === '-') {
        sum = subtract(a, b);
    } else if (operator === '*') {
        sum = multiply(a, b);
    } else if (operator === '/') {
        sum = divide(a, b);
    }
    
    return sum;
};