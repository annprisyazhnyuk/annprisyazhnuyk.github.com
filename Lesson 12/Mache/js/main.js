/*-----------------navigation-----------------------*/
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

 /*------------------flickity-slider-----------------*/
 $('.main-gallery').flickity({
     cellAlign: 'left',
     contain: true,
 });
