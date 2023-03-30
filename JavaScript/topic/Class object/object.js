// Object in the JS


const course = {
    "sirname": "Jaiswal",
    "name": "Rutvik",
    "Mobile": 9673062604
}


course.name = "Rutvik_"
// console.log(course);

// ES 6 syntax for varible declaration
let { sirname: lName } = course

// console.log(lName);

// Putting function as a varible in the object

const varible1 = () => {
    console.log("I'm walking", this.sirname);

    return 12;
}
// course.walk


// Creating function inside the object and accessing object parameter through it

let course2 = {
    "sirname": "Jaiswal",
    "name": "Rutvik",
    "Mobile": 9673062604,
    greating: function () {
        console.log(`Hello ${this.name} ${this.sirname}! how you are doing good ?`);
    }
}

course2.greating()