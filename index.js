$(document).on("keydown", function (event) {
    $("span.pror").html(event.key);
});

$(".burger").on("click", function (event) {
    $(".nav-bar").toggleClass("h-nav-resp");
    $(".nav-list").toggleClass("v-class-resp");
    $(".right-nav").toggleClass("v-class-resp");
});

$("nav ul li a").on("click", function (event) {
    $(".nav-bar").toggleClass("h-nav-resp");
    $(".nav-list").toggleClass("v-class-resp");
    $(".right-nav").toggleClass("v-class-resp");
});