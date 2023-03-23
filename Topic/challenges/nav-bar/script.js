const nav_bar_btn = document.querySelector("#toggler");

const event_click = () => {
    let nav_bars_menu = document.querySelector(".navbar-links");
    nav_bars_menu.classList.toggle("hidden-items")
}

const toggler = () => {
    nav_bar_btn.addEventListener("click", event_click);
}
toggler()