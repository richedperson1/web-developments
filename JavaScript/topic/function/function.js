function actual_value() {
    console.log("First Element")
    console.log("Second Element")
    console.log("Third Element")
}

// let first = actual_value();
// console.log(first);


// giving function give to the varible

let Element = function() {
        console.log("Hello world using varible declaration")
    }
    // Element()


// new updated function declaration in ES6

let consti = (a, b) => {
    return a * b
}

// console.log(consti(5, 6));

// For each method for array
let forEachFun = (ele, index) => {
    console.log("The element is : ", ele, " Index at : ", index);
}

const arr = [1, 2, "Hello", "Rutvik"];

// arr.forEach(forEachFun)


// Assignment on JS function

// Checking string is palimdrom or not.
let palimdrome_fun = (string) => {
    let size_str = string.length - 1
    for (let i = 0; i <= size_str; i++) {
        if (string[i] != string[size_str]) {
            console.log("False");
            return false;
        }
        size_str -= 1;
    }
    console.log("True");
    return true;
}
palimdrome_fun("ele");


// Calculating avarage 

let avarage_cal = (array) => {
    let size = array.length;
    let mean = 0;
    for (let num of array) {
        mean += num;
    }
    return mean / size;
}
let array2 = [1, 2, 3, 4];

console.log(avarage_cal(array2));