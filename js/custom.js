$(document).ready(function () {
    $("#slider").owlCarousel({
        items: 1,
        autoplay: true,
        dots: false,
        loop: true,
    });
});
VanillaTilt.init(document.querySelectorAll(".galbx"), {
    max: 25,
    speed: 400
});
