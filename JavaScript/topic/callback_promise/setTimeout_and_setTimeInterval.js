
let first = 0;


console.log("Before any operation");
const greet = (time, name) => {
    console.log("Good", time, name);
}

console.log("After key");
const goodNightMessage = setTimeout(greet, 2000, "Night", "Ryma");




let first_call_back = (callback) => {
    setTimeout(() => {
        callback("Here your pizza")
    }, 2000);
}

function Nofify(pize) {
    console.log("Hello,", pize);
}

first_call_back(Nofify)