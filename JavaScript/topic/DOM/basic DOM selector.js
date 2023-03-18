let first_box = document.getElementById("box-num-1")

let myfun = () => {
    first_box.classList.toggle("orange");
}
first_box.addEventListener("click", myfun)