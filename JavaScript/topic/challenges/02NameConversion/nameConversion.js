

/* 

These lines of code are adding event listeners to the `inputField` HTML element. Whenever the user
inputs text into the `inputField`, each of the corresponding functions (`camelCase`, `PacelCase`,
`snake_case`, `Screaming_Snake_Case`, `kabab_case`, and `Screaming_kabab_Case`) will be called and
will convert the input text into different formats and display the results in corresponding HTML
elements.

*/

let inputField = document.getElementById("text")
inputField.addEventListener("input", camelCase)
inputField.addEventListener("input", PacelCase)
inputField.addEventListener("input", snake_case)
inputField.addEventListener("input", Screaming_Snake_Case)
inputField.addEventListener("input", kabab_case)
inputField.addEventListener("input", Screaming_kabab_Case)

function camelCase() {
    let camelCaseInput = document.getElementById("camel-case")
    let array = inputField.value.split(" ")
    let newForm = ""

    array.forEach((val, ind) => {
        if (ind == 0) {
            newForm += val;
        }
        else {
            local = val.slice(0, 1).toUpperCase();
            val[0] = local;
            newForm += (local + val.slice(1));
        }
    })
    camelCaseInput.innerHTML = newForm
}

function PacelCase() {
    let camelCaseInput = document.getElementById("pascal-case")
    let array = inputField.value.split(" ")
    let newForm = ""

    array.forEach((val) => {
        local = val.slice(0, 1).toUpperCase();
        val[0] = local;
        newForm += (local + val.slice(1));

    })
    camelCaseInput.innerHTML = newForm
}

function snake_case() {

    let camelCaseInput = document.getElementById("snake-case")
    let array = inputField.value.split(" ")
    let newForm = ""
    let lastOne = array.length - 1
    array.forEach((val, ind) => {
        if (ind == lastOne) {
            newForm += val
        }
        else {

            newForm += (val + "_");
        }
    })
    camelCaseInput.innerHTML = newForm

}

function kabab_case() {

    let camelCaseInput = document.getElementById("kebab-case")
    let array = inputField.value.split(" ")
    let newForm = ""
    let lastOne = array.length - 1
    array.forEach((val, ind) => {
        if (ind == lastOne) {
            newForm += val.toLowerCase()
        }
        else {

            newForm += (val.toLowerCase() + "-");
        }
    })
    camelCaseInput.innerHTML = newForm

}

/**
 * The function converts a string input in camel case to screaming snake case and displays the result
 * in an HTML element.
 */
function Screaming_Snake_Case() {

    let camelCaseInput = document.getElementById("screaming-snake-case")
    let array = inputField.value.split(" ")
    let newForm = ""
    let lastOne = array.length - 1
    array.forEach((val, ind) => {
        if (ind == lastOne) {
            newForm += val.toUpperCase()
        }
        else {

            newForm += (val.toUpperCase() + "_");
        }
    })
    camelCaseInput.innerHTML = newForm

}

/**
 * The function converts a string input into screaming kebab case format and displays it in an HTML
 * element.
 */
function Screaming_kabab_Case() {

    let camelCaseInput = document.getElementById("screaming-kebab-case")
    let array = inputField.value.split(" ")
    let newForm = ""
    let lastOne = array.length - 1
    array.forEach((val, ind) => {
        if (ind == lastOne) {
            newForm += val.toUpperCase()
        }
        else {

            newForm += (val.toUpperCase() + "-");
        }
    })
    camelCaseInput.innerHTML = newForm

}



/* This code is selecting all the `p` elements inside the HTML elements with class `case_div` and
setting their `display` property to `none`. This is likely done to hide the output elements before
the user inputs any text to be converted. */
const btnActive = document.querySelectorAll(".case_div p");

btnActive.forEach((val) => {
    val.style.display = "none"
})



/* 

This code is selecting the HTML element with the ID "convert-btn" and adding an event listener to
it. When the button is clicked, the code checks the current display state of the first `p` element
inside the HTML elements with class `case_div`. If the display state is "none", meaning the output
elements are hidden, the code changes the display state of all `p` elements inside the `case_div` to
"inline-block", making them visible. 

*/
const btnConvert = document.getElementById("convert-btn")

btnConvert.addEventListener("click", () => {
    const stateP = btnActive[0].style.display
    if (stateP == "none") {
        btnActive.forEach((val) => {
            val.style.display = "inline-block"
        })
    }

})