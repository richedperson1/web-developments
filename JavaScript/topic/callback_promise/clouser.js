// First closer function


function outer_fun() {
    let var1 = "Anurag";
    function inner_fun() {
        console.log("Hello world");
        return NaN;
    }
    return inner_fun;
}


let first = outer_fun()

console.log(first());