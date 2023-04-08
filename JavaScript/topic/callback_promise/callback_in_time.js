
function frozen(first_one) {
    let pizza = "🍕";
    first_one(pizza);
    // console.log("Here is your ,", pizza);
}

function closer_ex(first_one) {
    setTimeout(frozen, 2000, first_one)
}


function calling(pizza) {
    console.log("Returning");
    return ("Here is your", pizza)
}


// let value = closer_ex(calling);
console.log(closer_ex(calling));
// console.log(value);