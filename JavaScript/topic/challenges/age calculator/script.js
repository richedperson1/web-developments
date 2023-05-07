const inputAge = document.getElementById("dob")

inputAge.addEventListener("input", dataInput)


function dataInput() {

    const date = new Date()
    console.log(inputAge.value);
    const changeDate = date - new Date(inputAge.value)
    console.log(changeDate.toLocaleString());
}


const selectDate = new Date("2023-03-01")
const todayDate = new Date()

let element = (todayDate.getDate() - selectDate.getDate());
console.log(element);


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    const utc3 = Date.UTC(b.getFullYear());
    const utc4 = Date.UTC(b.getFullYear());
    console.log(utc3 - utc4);
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2017-01-01")
const b = new Date("2017-07-25")
const difference = dateDiffInDays(a, b);

console.log(difference + ' days')