const cursor_point = document.querySelector(".box")
const main_container = document.querySelector(".container")

const cursor_move = (event) => {
    // cursor_point.style.position = "absolute"
    cursor_point.style.top = `${event.offsetY}px`
    cursor_point.style.left = `${event.offsetX}px`
}
const main_container_scroll = () => {
    const main_container = document.querySelector(".container")
    if (main_container.scrollTop > 20) {
        main_container.style.backgroundColor = "red";
    }
}

// main_container.addEventListener("mousemove", cursor_move)
main_container.addEventListener("scroll", main_container_scroll)



window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "";
    }
});

const div = document.getElementById("container");
div.addEventListener("scroll", changeBackground);
// main_container.addEventListener("mouseleave", cursor_end)
// console.log(main_container)