/*-------------------------------flexslider----------------------------------*/

$(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});
/*-------------------------------------slick-slider----------------------------*/
$(document).ready(function(){
    $('.slick-slider').slick({
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    });
});

/*------------------------------------------------accordeon------------------------------*/
$(document).ready(function() {
    if ($(window).width() > 800) {
        return;
    }
    $(".accordeon .popular-item").hide().prev().click(function () {
        $(this).parents(".accordeon").find(".popular-item").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
});

$(document).ready(function() {
    if ($(window).width() > 800) {
        return;
    }
    $(".left-col .genre, .navigation, .advert-cont").hide().prev().click(function () {
        $(this).parents(".left-col").find(".genre, .navigation, .advert-cont").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
});
