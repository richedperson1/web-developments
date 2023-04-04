
// Filter Used
let arr = [1, 2, 3, 4];

// const isEven = (num) => {
//     return !(num & 1);
// }

let local_arr = arr.filter((ele, ind, arr) => {
    return ele % 3 == 0;
})


// console.log(local_arr);


// Map Function

let ele_arr = [2, 3, 4, 5, 6];

let obj = arr.map((ele) => {
    // console.log(ele * ele);
    return ele * ele;
})
// console.log(arr);
// console.log(obj);


// Assignments

//1.  Filter out all the values with less than 3 characters.

let arr_assign = ["Ruvik", "Jai", "Jaiswal", "Patil", "Hitesha"]


let less_3 = arr_assign.filter((ele) => {
    if (ele.length <= 3) {
        return true
    }
    return false
})

// console.log(less_3);

//2. Filter out all the values that contain the expression "Jai".

let contain_hi = arr_assign.filter((ele) => {
    if (ele.startsWith("Jai") | ele.startsWith("Hi")) {
        return true;
    }
    return false;
})
// console.log(contain_hi);



//3. Filter out all the values that are palindrome.

const check_palim = (string) => {
    let size = string.length;
    for (let ind = 0; ind < size / 2; ind++) {
        if (string[ind] != string[size - ind - 1]) {
            return false;
        }
    }
    return true;
}

let arr_assign2 = ["asa", "", "Jaiswal", "Patil", "Hitesha", "jaJ"]

// let palim = arr_assign2.filter(check_palim)
// console.log(palim);


// Map function Assignment

//1.  Modify the Numbers and make them String and return an array.

let arr_assgin = [1, 2, 3, 4, 5, 6, 7]

let int_string = arr_assgin.map((ele) => {
    return ele.toString();
})

// console.log(int_string);

// Assignmet 3

let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

// a. Filter the users whose firstName is “Susan”.

let first_element = users.filter((ele) => {
    if (ele.firstName == "Susan") {
        return true
    }
    return false
})

console.log(first_element);

// b. Filter out the users whose lastName starts with the letter L.



let last_ele = users.filter((ele) => {
    if (ele.lastName.endsWith("m")) {

        return true
    }
    return false
})

console.log(last_ele);


// c. Map and return an array called fullName with full name values like "Susan Steward"



let join_two = users.map((ele) => {
    return ele.firstName + " " + ele.lastName
})
console.log(join_two);