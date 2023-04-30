const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
    "lowercase": getRandomLower,
    "uppercase": getRandomUpper,
    "numbers": getRandomNumber,
    "symbols": getRandomSymbol,
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');

    return



    clipboardEl.classList.add("selected")
    copyElementText("result")

    setTimeout(() => {
        clipboardEl.classList.remove("selected")
    }, 2000)

})

function copyElementText(elementId) {
    const element = document.getElementById(elementId);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}


generateEl.addEventListener('click', () => {
    const lengths = lengthEl.value;
    const generatedPassord = generatePassword(getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol, lengths)
    resultEl.innerHTML = generatedPassord
})

function generatePassword(lower, upper, number, symbol, length) {
    let formPass = "";
    let randomKey = 0;

    let checkedArr = checkBoxSelect()
    if (checkedArr.length == 0) {
        alert("Select at least one type ");
        return;
    }

    for (let i = 0; i < length; i++) {
        randomKey = Math.floor(Math.random() * checkedArr.length);
        formPass += randomFunc[checkedArr[randomKey]]();
    }
    return formPass;
}

function getRandomLower() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomUpper() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase();
}


function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*_-()-.[]~;:+=";
    let slicing = Math.floor(Math.random() * symbol.length);
    return symbol.slice(slicing, slicing + 1);
}


function checkBoxSelect() {

    let inputCheckList = []
    var allInputs = document.getElementsByTagName("input");
    for (var i = 0, max = allInputs.length; i < max; i++) {
        if ((allInputs[i].type === 'checkbox') & (allInputs[i].checked == true)) {
            inputCheckList.push(allInputs[i].getAttribute("id"));
        }

    }
    return inputCheckList;
}