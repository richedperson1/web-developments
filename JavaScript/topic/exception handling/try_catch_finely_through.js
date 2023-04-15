
let ele = "Global function Rutvik";
let ele2 = "Global function  Patil";

function abc() {
    let first = "ABC function varible Ruvik";
    let lastName = "ABC function varible Jaiswal";

    function inner() {
        var globalele = "Jaiswal";
        console.log(lastName);
        console.log(ele2);
        abc();
    }
    return inner;
}

abc()();