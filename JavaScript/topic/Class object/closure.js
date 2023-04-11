const add = () => {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
        // return count
    }
    return inner
}

function parentFunction(arg1) {
    var a = arg1;
    return function childFunction(arg2) {
        console.log(a + " " + arg2);
    };
};

var val = parentFunction("outer val");
val("inner val");

let final = add()


// A closure function does hold references to variables defined in its outer function, even after the outer function has returned, which can prevent those variables from being garbage collected. However, the closure function itself does not hold the main function in memory.

// Since inner function using outer function varible. outer function varible not going into the gar
// garbage collection. Inner function only stored varible into the memory not whole function
