
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
console.log(arr);
console.log(obj);