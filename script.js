const numbers = document.querySelectorAll('div #numbers > button');
const symbols = document.querySelectorAll('div #symbols > button');
const display = document.querySelector('#display');
let a = 0;
let b = 0;
let sum = 0;

// Nothing gets returned from addEventListeners
numbers.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

symbols.forEach(button => {
    button.addEventListener('click', controller);
});

function saveFirstNumber() {
    a = parseInt(display.value)
    console.log(a)
    console.log(typeof a)
    return a;
}

function saveSecondNumber() {
    b = parseInt(display.value);
    console.log(b)
    console.log(typeof b)
    return b;
}

// better name? 
function controller(e) {
    if (!(e.target.value === '=')) {
        saveFirstNumber()
        saveOperator(e)
        clearDisplay()
    } else if (e.target.value === '=') {
        saveSecondNumber()
        operate(a, operator, b)
        console.log(sum)
    }
}

function clearDisplay() {
    display.value = '';
} 

function updateDisplay(e) {
    display.value += e.target.value;
    return display.value; 
};

function saveOperator(e) {
    operator = e.target.value;
    // console.log(operator)
    return operator;
}

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
    return a / b; 
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


// console.log(operate(5,'+',4))
