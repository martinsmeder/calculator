const numbers = document.querySelectorAll('div #numbers > button');
const symbols = document.querySelectorAll('div #symbols > button');
const clearBtn = document.querySelector('#clear');
const display = document.querySelector('#display');
let a = 0;
let b = 0;
let sum = 0;
let clickCount = 0;

// Nothing gets returned from addEventListeners
numbers.forEach(button => {
    button.addEventListener('click', updateDisplay);
});

symbols.forEach(button => {
    button.addEventListener('click', controller);
});

clearBtn.addEventListener('click', clearEverything);

function saveFirstNumber() {
    a = parseInt(display.value)
    return a;
}

function saveSecondNumber() {
    b = parseInt(display.value);
    return b;
}

function controller(e) {
    // count clicks on symbols
    clickCount = e.currentTarget;
    clickCount.clicks = (clickCount.clicks || 0) +1;
    clickCount = clickCount.clicks;

    if (clickCount === 1 && !(e.target.value === '=')) {
        saveFirstNumber()
        saveOperator(e)
        clearDisplay()
        console.log('a: ' + a)
        console.log('b: ' + b)
        console.log('operator: ' + operator)
        console.log('sum: ' + sum)
    } else if (clickCount === 2 && !(e.target.value === '=')) {
        saveSecondNumber()
        saveOperator(e)
        operate(a, operator, b)
        showResult()
        clearDisplay()
        console.log('a: ' + a)
        console.log('b: ' + b)
        console.log('operator: ' + operator)
        console.log('sum: ' + sum)
    } else if (!(e.target.value === '=')) {
        updateFirstNumber()
        saveSecondNumber()
        saveOperator(e)
        operate(a, operator, b)
        showResult()
        clearDisplay()
        console.log('a: ' + a)
        console.log('b: ' + b)
        console.log('operator: ' + operator)
        console.log('sum: ' + sum)
    } else if (e.target.value === '=') {
        updateFirstNumber()
        saveSecondNumber()
        operate(a, operator, b)
        showResult()
        clearDisplay()
        console.log('a: ' + a)
        console.log('b: ' + b)
        console.log('operator: ' + operator)
        console.log('sum: ' + sum)
    }
}

function updateFirstNumber() {
    a = sum;
    return a;
}

function clearEverything() {
    clearDisplay()
    a = 0;
    b = 0;
    sum = 0;
}

function clearDisplay() {
    display.value = '';
} 

function updateDisplay(e) {
    display.value += e.target.value;
    return display.value; 
};

function showResult() {
    clearDisplay();
    display.value = sum;
    console.log(sum)
}

function saveOperator(e) {
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
        display.value = "???"
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