// HOF => Higher order function

// Callbacks


// When the function take a function as the argument and calling it into the function are called as callback function


function greeting() {
    callback()
    console.log("I'm great");
}


function callback() {
    console.log("I'm back from village");
}

// greeting()


// Map function

const num = [1, 2, 3, 4, 5, 6]

const modifiedNum = num.map((val) => {
    return val * 3
})

// console.log(modifiedNum);

const newArr = num.filter((val) => {
    if (val % 2) {
        return 1;
    }
    return 0;
});

// console.log(newArr);

const newRe = num.reduce((prev, val) => {
    return prev + val
}, 1)


// console.log(newRe);
// console.log();


// Async and await


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('505 problem not happen');

        }, 2000);
    }
    );
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    return await result
    // Expected output: "resolved"
}

const hellow = asyncCall();
hellow.then((result) => {
    console.log(result);
})