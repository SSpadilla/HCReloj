let menuContainer = document.getElementById("menu-container");
let menu = document.getElementById("menu");

menuContainer.addEventListener('click', (e) => {

    if (e.target.className === "icon-toggle") {
        menu
            .classList
            .add("active");
    }
});

menu.addEventListener('click', (e) => {
    if (e.target.className === "close") {
        menu
            .classList
            .remove("active");
    }
});

window.addEventListener('scroll', (e) => {
    let change = document.getElementById("servicios");
    ("menu-container");
    if ((menuContainer.getBoundingClientRect().top + e.pageY) >= (change.getBoundingClientRect().top + e.pageY)) {
        menuContainer
            .classList
            .add("invert");
    } else {
        menuContainer
            .classList
            .remove("invert")
    }
});

