
/*------------navigation-----------*/
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
/*-------------isotope-------------*/
$(document).ready(function() {
  var $container = $('.isotope');
  $('.filters a').click(function() {
    var $this = $(this);
    if (!$this.hasClass('is-checked')) {
      $this.parents('#options').find('.is-checked').removeClass('is-checked');
      $this.addClass('is-checked');
    }
    var selector = $this.attr('data-filter');
    $container.isotope({
      itemSelector: '.works-item',
      filter: selector
    });
    return false;
  });
});
