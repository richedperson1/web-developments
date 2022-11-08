var userInput = document.getElementsByClassName("number")
var total_length = userInput.length
var display = document.getElementById("display_out")
var clear_button = document.getElementById("AC_button")


//Functionality in the calculator using array 
// var operation = { 0: "div", 1: "sub", 2: "mul", 3: "add" }
var arr = [0, 0, 0, 0, 0]

// Operation button in calculators
var div_button = document.getElementById("div_button")
var equal_button = document.getElementById("equal_button")
var sub_button = document.getElementById("sub_button")
var add_button = document.getElementById("add_button")
var mul_button = document.getElementById("mul_button")
var per_button = document.getElementById("per_button")

// Adding click function in the each tags
for (let i = 0; i < total_length; i++) {
    userInput[i].addEventListener("click",
        click_event = () => {
            display.innerHTML = display.innerHTML + userInput[i].textContent
        })
}


clear_button.onclick = () => {
    display.innerHTML = ""
}

let first = 0
let second = 0

// Divide button click
div_button.onclick = () => {
    first = display.textContent;
    display.innerHTML = "";
    arr[0] = 1;
}

// Subtract button click
sub_button.onclick = () => {
    first = display.textContent;
    display.innerHTML = "";
    arr[1] = 1;
}

// Add button click
add_button.onclick = () => {
    first = display.textContent;
    display.innerHTML = "";
    arr[2] = 1;
}

// Multiply button click
mul_button.onclick = () => {
    first = display.textContent;
    display.innerHTML = "";
    arr[3] = 1;
}

// percentage button click
per_button.onclick = () => {
    first = display.textContent;
    display.innerHTML = "";
    arr[4] = 1;
}





//Eaual to button click 
equal_button.onclick = () => {
    function checkAge(age) {
        return age > 0;
    }
    let index = arr.findIndex(checkAge);
    second = display.textContent;

    if (index == 0) {
        display.innerHTML = first / second;
        arr[0] = 0
    } else if (index == 1) {
        display.innerHTML = first - second;
        arr[1] = 0
    } else if (index == 2) {
        display.innerHTML = parseInt(first) + parseInt(second);
        arr[2] = 0
    } else if (index == 3) {
        display.innerHTML = first * second;
        arr[3] = 0
    } else if (index == 4) {
        display.innerHTML = (first / second) * 100;
        arr[4] = 0
    }

}