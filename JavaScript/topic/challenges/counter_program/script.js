
let displayValue = document.querySelectorAll(".display p")[0];

// Method  1
function increament() {
    let displayVal = Number(displayValue.innerHTML) + 1;
    displayValue.innerHTML = displayVal;

}

function decreament() {
    let displayVal = Number(displayValue.innerHTML) - 1;
    displayValue.innerHTML = displayVal;

}

function reset() {
    displayValue.innerHTML = 0;
}

// let increametBtn = document.getElementsByClassName("increament")[0];
// let decreametBtn = document.getElementsByClassName("descreament")[0];
// let resetBtn = document.getElementsByClassName("Reset")[0];

// increametBtn.addEventListener("click", increament);
// decreametBtn.addEventListener("click", decreament);
// resetBtn.addEventListener("click", reset);


// Method 2

let allBtn = document.querySelectorAll(".shape");

allBtn.forEach(function (items) {
    items.addEventListener("click", actualWork)
})


function actualWork(first) {
    let clsList = first.srcElement.classList;

    let score = displayValue.innerHTML
    if (clsList.contains("increament")) {
        score++;
    }
    else if (clsList.contains("descreament")) {
        score--;
    }
    else {
        score = 0;
    }
    if (score < 0) {
        displayValue.style.color = "red"
    }
    else {
        displayValue.style.color = "black"
    }
    displayValue.innerHTML = score
}


// Method 2