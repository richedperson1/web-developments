
let btn_cls = document.querySelectorAll(".change-color")[0];


btn_cls.addEventListener("click", change_color);



function change_color() {
    const colorPicker = "0123456789ABCDEF"
    let form_color = ""
    for (let a = 0; a < 6; a++) {
        let localColor = Math.max(0, (Math.ceil(Math.random() * 16)) % 16)
        form_color += colorPicker[localColor]
    }
    console.log(form_color);
    document.body.style.backgroundColor = "#" + form_color


}

