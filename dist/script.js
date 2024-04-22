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
functionBtns.addEventListener("click", displayInput);
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
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (start === end) {
        input.value = input.value.substring(0, start - 1) + input.value.substring(end);
        input.setSelectionRange(start - 1, start - 1);
    } else {
        input.value = input.value.substring(0, start) + input.value.substring(end);
        input.setSelectionRange(start, start);
    }
    input.focus();
}

function addParenthesis() {
    const inputValue = input.value;
    const openParenthesesCount = (inputValue.match(/\(/g) || []).length;
    const closeParenthesesCount = (inputValue.match(/\)/g) || []).length;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (openParenthesesCount > closeParenthesesCount) {
        input.value = input.value.substring(0, start) + ")" + input.value.substring(end);
        input.setSelectionRange(start + 1, start + 1);
        input.focus();
    } else {
        input.value = input.value.substring(0, start) + "(" + input.value.substring(end);
        input.setSelectionRange(start + 1, start + 1);
        input.focus();
    }
}

function clearInput() {
    input.value = "";
    input.focus();
}

function displayInput(event) {
    if (event.target.classList.contains('btn')) {
        const buttonValue = event.target.value;
        const start = input.selectionStart;
        const end = input.selectionEnd;

        input.value = input.value.substring(0, start) + buttonValue + input.value.substring(end);
        input.focus();
        const cursorPos = start + buttonValue.length;
        input.setSelectionRange(cursorPos, cursorPos);
    }
}