


class Emp {
    constructor(name, lastName = "Jaiswal", Job = "USA") {
        this.first_name = name;
        this.lastName = lastName;
        this.Job = Job;
        // console.log("My name is", this.first_name);
        // console.log("Last name is", this.lastName);
        // console.log("And Job Location is", this.Job);
        return 0;
    }
    emp_actual() {
        this.element = "Hello worlds";
    }
}

let rutvik = new Emp("Rutvik")
console.log(rutvik);
rutvik.emp_actual()
console.log(rutvik);