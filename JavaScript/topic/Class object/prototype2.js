
let arr2 = [1, 2, 3, 4, 5]



// console.log(arr2.keyfun());

Array.prototype.keyfun = function () {
    let lenght = this.length;
    console.log(`Total number in array is : ${lenght}`);
}



let school = {
    name: "RUTVIK JAISWAL SCHOOL OF TECHNOLOGY",
    location: "pune",
    placementRate: "100%",
    higheshPackge: "45lpa",
    taking: (first) => {
        console.log("I can talking in school", first);
        return 1;
    }
}

let student = {
    parent: "mom",
    parentName: "non"
}

let pricipal = {
    name: "jaiswal",
    salary: "45lpca",
    taking: () => {
        console.log("I can talking in school");
        return 1;
    }
}

// pricipal.taking("Rutvik")
// pricipal.taking("")
// pricipal.taking()

Object.setPrototypeOf(pricipal, student)
Object.setPrototypeOf(pricipal, school)



// Adding string method in string phototype


let objectIng = " Rutvik  "

String.prototype.trueLength = function () {
    let newStr = this.replace(/^\s+|\s+$/gm, '')
    console.log(newStr.length);
    return (newStr.length);
}




console.log(objectIng.trueLength());