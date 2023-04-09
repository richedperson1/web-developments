
// let arr = [["html", "css", "JS"], ["flask", "MongoDB", "MYsql"]]


// let [[lang, css, js], [backend]] = arr

// console.log(lang);
// console.log(css);
// console.log(js);
// console.log(backend);



function sumi_fun(x, y) {
    return x + y;
}

let arr2 = [2, 11, 3];
let ans = sumi_fun(...arr2);

console.log(ans);


function sumi_all(...args) {
    let sumi = 0;
    for (let a of args) {
        sumi += a;
    }
    return sumi;
}
console.log(sumi_all(2, 3, 4, 5, 6));



// Demo for video

// Spread Operator 

let arr1 = [2, 3, 4, 5, 6, 7, 8]


let brr = [10, 12, ...arr1]

const new_brr = [...arr1, ...brr]

console.log(new_brr);



// Rest Operator

function sumi_new(...arr) {
    let sumi = 0;
    for (let ele of arr) {
        sumi += ele;
    }
    console.log(sumi);
    return sumi;
}



sumi_new(2, 1, 4, 5, 6, 8, 10);