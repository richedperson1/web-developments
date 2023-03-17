let arr = [1, 2, 3, "rutvik", "Jaiswal"]

// Loop in the javascript
// for (let name in arr) {
//     console.log("Hello words", name)
// }
// for (let fname of arr) {
//     console.log("Hello -->", fname)
// }


// JavaScript array methods

let arr_sub = arr.slice(1, 5)

// console.log(arr_sub)


// Deleting Element from the array

arr.splice(0, 3, "Bhirud")

// console.log("Final array : ", arr)

// Adding new element in perticular index
arr.splice(2, 0, "Patil")


console.log(arr)