
/*--------------navigation--------------*/
$(function() {
    var pull 		= $('.fa-bars');
    menu 		= $('nav ul');
    menuHeight	= menu.height();
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
/*-------------carousel-team------------------*/
$(document).ready(function() {
    $("#carousel-team").owlCarousel({

        autoPlay: 5000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],
        navigation: true,
        navigationText: [
            "<span class='fa fa-angle-left'></span>",
            "<span class='fa fa-angle-right'></span>"
        ]
    });
});


/*-------------carousel-testimonials-----------*/

$(document).ready(function() {
    $("#carousel").owlCarousel({

        autoPlay: 5000,
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2]
    });
});


/*---------------------video--------------------*/
$(document).ready(function() {
    $('.video-button').click(function () {
        $('.window-video').slideToggle(250);
        return false;
    });
    $(".video-close").click(function () {
        $('.window-video').hide("slow");
    });
});
