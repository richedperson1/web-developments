
const inputBtn = document.querySelector(".center-flex input")

console.log(inputBtn);

// document.addEventListener("click", hiddeHeader)
document.addEventListener("dblclick", showTime)


function hiddeHeader() {
    const heading_h2 = document.querySelector(".center-flex h2")
    heading_h2.classList.toggle("deactive-cls")
}

function showTime() {
    const heading_h2 = document.querySelector(".center-flex h2")
    let paragraph = document.createElement("p")

    heading_h2.appendChild(paragraph)

}