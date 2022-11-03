var num = 0

let box_ele = document.getElementById("select_box")

param = document.getElementById("text_for_box")

box_ele.onclick = () => {

    num++;
    param.innerHTML = param.textContent.slice(0, 10) + " " + num
}