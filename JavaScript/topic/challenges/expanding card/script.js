
const all_image = document.getElementsByClassName("image-style");

const arr_image = Array.from(all_image)

let prev = 0;
arr_image.map((val, ind) => {

    val.addEventListener("click", () => {
        image_expand(val);
        prev = ind

    })
})

function image_expand(image_select) {
    const removeActive = arr_image[prev];
    const deactiveImg = removeActive.children[0]
    deactiveImg.classList.add("image-title")

    removeActive.classList.remove("active")

    const activeImgChild = image_select.children[0]
    activeImgChild.classList.remove("image-title")
    const classListing = image_select.classList;

    classListing.add("active")

    console.log(activeImgChild);
}