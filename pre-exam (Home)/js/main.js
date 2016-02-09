/*-----------------owl slider-----------------------*/

$(document).ready(function() {

    $("#owl-slider").owlCarousel({
            items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1]
    });
});