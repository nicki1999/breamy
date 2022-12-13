$(document).ready(function() {

    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        noWrap: true,
        // onCycleTo: function(data) {
        //     if ($(data).index() == $(".carousel-item").length) {
        //         $('.preview-button').hide();
        //     }
        // }
    });
    $(".carousel").height($(window).height());

    $('.preview-button').click(function() {
        $('.carousel.carousel-slider').carousel('next');
    });

});