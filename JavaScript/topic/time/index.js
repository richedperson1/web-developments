let data = new Date()
console.log(data);



console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());

console.log(data.toDateString());


let arr = [10, 25, "rutvik", "Hari", "Haary", null, true, 1.2];



for (let ind = 0; ind < arr.length; ind++) {
    if (typeof arr[ind] == "string") {

        console.log(arr[ind]);

    }
}