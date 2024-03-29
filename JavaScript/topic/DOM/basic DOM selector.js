// Method 1 to add orange class in the elements

let first_box = document.getElementById("box-num-1")

let myfun = (first_box) => {
    first_box.classList.toggle("orange");
}

let addingToggleBtn = () => {

    let boxes = document.getElementsByClassName("boxes")
    let num = boxes.length
    for (let ind = 0; ind < num; ind++) {
        let child = boxes[ind]
        child.addEventListener("click", function() {
            myfun(child);
        })

    }
}

addingToggleBtn();

// Method 2
// const myfun2 = (box) => {
//     box.classList.toggle("orange");
//   }

//   let boxes = document.querySelectorAll(".boxes");

//   let addingToggleBtn2 = () => {
//     boxes.forEach(box => {
//         box.addEventListener("click", function() {
//             myfun2(box);
//         });
//     });
//   }


// Adding Class and child to the div 

const second_div = document.querySelector(".second")
second_div.classList.add("container")

const cursor = (box, event) => {
    box.innerHTML = `${event.offsetY} ${event.offsetX}`
}

const addingChild = () => {
    const second_div = document.querySelector(".second");
    numberChild = 5;
    for (let ind = 0; ind < numberChild; ind++) {
        let childing = document.createElement("section");

        childing.classList.add("boxes");
        childing.classList.add("boxe-style");

        childing.addEventListener("mousemove", function eventing(event) {
            cursor(childing, event);
        });

        second_div.appendChild(childing);
    }
}
addingChild()