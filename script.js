const container = document.querySelector('#container');
const oneBtn = document.querySelector('#one')
const twoBtn = document.querySelector('#two')
const display = document.querySelector('#display');
let displayText = '';


oneBtn.addEventListener('click', () => {
    updateDisplay('1');
})

twoBtn.addEventListener('click', () => {
    updateDisplay('2');
})

function updateDisplay(displayText) {
    display.value = displayText;
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
    let sum = 0;

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


console.log(operate(5,'*',4))