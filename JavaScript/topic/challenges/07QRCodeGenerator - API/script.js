let nameError = document.getElementById("nameError");
const submitBTN = document.getElementById("submit");
const image = document.querySelector("img");
const inputData = document.getElementById("input");

submitBTN.addEventListener("click", submit_btn);

function submit_btn() {
    let inputDataValue = inputData.value;
    if (validateForm() == false) {
        setTimeout(() => {
            nameError.style.visibility = "hidden";
        }, 1000)
        return "Not found"
    }

    inputDataValue = inputDataValue.replace(/\s/g, "");
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${inputDataValue}&size=100x100`
    imageLoading(url).catch((data) => {
        console.log("not found");
        return "Not found image";
    })
}


async function imageLoading(url) {
    const url_image = await fetch(url)

    image.src = url_image["url"]
    image.style.display = "inline"
    return url_image
}




function validateForm() {
    let nameInput = document.getElementById("input");
    let nameValue = nameInput.value.trim();

    if (nameValue === "") {
        nameError.style.visibility = "visible";
        nameInput.focus();
        return false;
    }

    // form validation succeeded
    return true;
}
