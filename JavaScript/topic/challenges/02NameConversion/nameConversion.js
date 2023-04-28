
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



const btnActive = document.querySelectorAll(".case_div p");

btnActive.forEach((val) => {
    val.style.display = "none"
})



const btnConvert = document.getElementById("convert-btn")

btnConvert.addEventListener("click", () => {
    const stateP = btnActive[0].style.display
    if (stateP == "none") {
        btnActive.forEach((val) => {
            val.style.display = "inline-block"
        })
    }

})