class emp {
    constructor(name) {
        this.first_name = name;
        console.log("My name is", this.first_name);
        return 0;
    }
}

rutvik = new emp("Rutvik")
console.log(rutvik);