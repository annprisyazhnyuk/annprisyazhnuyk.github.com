/*--------------------------------slider-hero-----------------------------*/
$(document).ready(function(){
    $('.slide').slick({
        autoplay: true
    });
});


/*-------------------------------navigation--------------------------------*/
$(document).ready(function(){
    $('nav').on('click', '.fa-bars', function() {
       $('.navigation').fadeToggle(false);
        $('.fa-bars').remove();
    });
});


/*----------------------------------------portfolio-------------------------*/
jQuery(window).load(function () {
    jQuery('.grid').masonry({
        columnWidth: 23,
        itemSelector: '.grid-item',
        singleMode: true,
        fitWidth: true,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: true,
            duration: 500
        }
    });
});


/*----------------------------clients-logo slider--------------------------*/
$(window).load(function() {
    $("#flexisel-logo").flexisel({
        visibleItems: 5,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });

});