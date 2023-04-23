

async function firstAsync() {

    console.log("Inside the firstAsync function");
    const feching = await fetch("https://api.github.com/users");
    // const responseResult = await feching.json();
    // console.log(feching.json);
    return feching
}



console.log("Before calling async function");

let objFirst = firstAsync();

console.log("After calling async function");
console.log("---->", objFirst);