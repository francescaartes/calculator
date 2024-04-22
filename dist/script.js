const mainBtns = document.getElementById('main-btns');
const clearBtn = document.getElementById('clear-btn');
const delBtn = document.getElementById('del-btn');
const parenthesisBtn = document.getElementById('parenthesis-btn');
const perrcentBtn = document.getElementById('percent-btn');
const divideBtn = document.getElementById('divide-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const minusBtn = document.getElementById('minus-btn');
const addBtn = document.getElementById('add-btn');
const signBtn = document.getElementById('sign-btn');
const pointBtn = document.getElementById('point-btn');
const equalBtn = document.getElementById('equal-btn');
const numBtn = document.getElementById('num-btn');

const functionBtns = document.getElementById('function-btns');
const radDegBtn = document.getElementById('rad-deg-btn');

const input = document.getElementById('input');
const output = document.getElementById('output');

mainBtns.addEventListener("click", displayInput);
clearBtn.addEventListener("click", clearInput);
parenthesisBtn.addEventListener("click", addParenthesis);
delBtn.addEventListener("click", deleteInput);
radDegBtn.addEventListener("click", radtoDeg);

function radtoDeg() {
    if (radDegBtn.value === "deg") {
        radDegBtn.textContent = "Rad";
        radDegBtn.value = "rad";
    } else {
        radDegBtn.textContent = "Deg";
        radDegBtn.value = "deg";
    }
}

function deleteInput() {
    input.value = input.value.slice(0, -1);
}

function addParenthesis() {
    const inputValue = input.value;
    const openParenthesesCount = (inputValue.match(/\(/g) || []).length;
    const closeParenthesesCount = (inputValue.match(/\)/g) || []).length;

    if (openParenthesesCount > closeParenthesesCount) {
        input.value += ")";
    } else {
        input.value += "(";
    }
}

function clearInput() {
    input.value = "";
}

function displayInput(event) {
    if (event.target.classList.contains('active:bg-zinc-800')) {
        const buttonValue = event.target.value;
        const inputValue = input.value;
        input.value += buttonValue;
        input.focus();
    }
}

