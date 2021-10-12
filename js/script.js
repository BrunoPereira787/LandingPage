//menu responsivo

let show = true;

const menuFlex = document.querySelector(".menu-flex")
const menuToggle = menuFlex.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    menuFlex.classList.toggle("menu-mobile", show)
    show = !show;
});



$("document").ready(function($){
    var nav = $('.menu-flex');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.addClass("menu-fixo");
        } else {
            nav.removeClass("menu-fixo");
        }
    });
});