const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");
const home = document.querySelector(".home");

navToggle.addEventListener("clik",() => {
    navMenu.classList.toggle("nav_menu_visible")
    home.addEventListener("click",() => {
        navMenu.classList.remove("nav_menu_visible")
    })

})