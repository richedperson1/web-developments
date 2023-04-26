
let userBtn = document.getElementsByClassName("userInput")[0];


userBtn.addEventListener("click", function () {
    // userBtn.classList
    let userInput = Number(prompt("Enter The value 20-10 ", 0));

    let element = document.getElementsByClassName("main-div-para")[0];
    if (userInput == 10) {
        let confirming = confirm("Are you sure ? ");

        if (confirming) {
            element.innerHTML = "Your ticket is Confirm";
        }
        else {
            element.innerHTML = "Your ticket is Confirm";

        }
    }
    else {
        element.innerHTML = "Your ticket is not Confirm";
        alert("Ticket not booked yet");
    }
})