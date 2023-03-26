const color_picker_boxes = document.querySelectorAll(".containt-box");

const change_name = (tag_name) => {
    tag_name.children[0].innerHTML = "Copied ✅";
}
const change_copied = (tag_name) => {
    tag_name.children[0].innerHTML = "#563Fr";
}

const box_click_event = () => {
    let box_length = color_picker_boxes.length;
    for (let ind = 0; ind < box_length; ind++) {
        color_picker_boxes[ind].addEventListener("click",
            function event() {
                let child = color_picker_boxes[ind];
                change_name(child.nextElementSibling);
            })
    }

    for (let ind = 0; ind < box_length; ind++) {

        color_picker_boxes[ind].addEventListener("mouseleave",
            function event() {
                let child = color_picker_boxes[ind];
                change_copied(child.nextElementSibling);
            })
    }
}

box_click_event()