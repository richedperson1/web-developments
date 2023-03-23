const total_child = document.querySelector(".list")


const adding_flex_class = () => {
    let children = total_child.children
    let total = children.length
    for (let ind = 0; ind < total; ind++) {
        let index_child = children[ind].classList
        index_child.add("flex")
    }
}

adding_flex_class()
console.log(total_child.nextSibling);