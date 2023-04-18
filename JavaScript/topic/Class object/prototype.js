let obj = {
    "Name": "Rutvik",
    "LastName": "Jaiswal",
    Greeting: function () {
        console.log("Hello", this.Name, this.LastName, "You are welcome");
    }
}

let obj2 = {
    hello: "Rutvik",

}
let obj3 = {
    hello: "Rutvik",

}

console.log(obj3);
obj2.__proto__ = obj

console.log(obj2);
console.log(obj);