// var num = 0

// let box_ele = document.getElementById("select_box")

// param = document.getElementById("counters")

// box_ele.onclick = () => {

//     num++;
//     param.innerHTML = num
// }

var num = 0
const check_click = () => {
    param = document.getElementById("counters")
    num++;
    param.innerHTML = num;

}

param = document.getElementById("select_box")


parent.addEventListener("click", check_click)

/*

we can also take input in addEventListener 

by following 



var num = 0
const check_click = (a,b) => {
    param = document.getElementById("counters")
    num = a+b;
    param.innerHTML = num;

}
parent.addEventListener("click", check_click(5,6));


*/