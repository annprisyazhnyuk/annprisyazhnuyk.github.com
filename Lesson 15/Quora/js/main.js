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


$(document).ready(function () {
    $('#blog-container').masonry({
        itemSelector: '.blog-item',
        singleMode: true,
        fitWidth: true,
        isResizable: true,
        isAnimated: true,
        columnWidth: 270,
        animationOptions: {
            queue: true,
            duration: 500
        }
    });
});
jQuery(window).load(function(){
    jQuery('#blog-container').masonry({
        columnWidth:310,
        itemSelector: '.blog-item' });
});


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


var top_show = 150;
var delay = 1000;
$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > top_show) $('.top-button').fadeIn();
        else $('.top-button').fadeOut();
    });
    $('.top-button').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});