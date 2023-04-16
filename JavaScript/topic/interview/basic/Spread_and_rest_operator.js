

let object = { Rutvik: 5, Jaiswal: 6, Nimbol: 9, Raver: 69 };


function rest_operator(...resting) {
    console.log(resting);
}

rest_operator(1, 2, 3, "Ruv", "Aaru");


let stringObj = "TechArtical"

let restString = [...stringObj]

// console.log(restString);


// Rest Operator for string

function restString2(...string) {
    console.log(string);
}

restString2(...stringObj)
