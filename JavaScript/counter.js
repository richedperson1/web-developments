let counterInput = document.getElementById("counter_start_id")
let counterSubmit = document.getElementById("counter_submit")
let display_count = document.getElementById("display_id")


let num = 0
const operation = () => {

    display_count.innerHTML = "Number is : " + num
    num += 1;

}

function counter_reay(event) {
    setInterval(operation, 1000)
    event.preventDefault();


}
counterSubmit.addEventListener("click", counter_reay)