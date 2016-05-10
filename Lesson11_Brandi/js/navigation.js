$(function () {
    var pull = $('.fa-bars');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

/* ----------------------- COUNTER ----------------------------------------- */
$(document).ready(function () {
    jQuery('.resume').counterUp({
        delay: 10,
        time: 1000
    });
/* ---------------------- PORTFOLIO ---------------------------------------- */
    jQuery(function(){
        $('#mixit-container').mixItUp();
    });
});

var buttonFilter = {

    $filters: null,
    $reset: null,
    groups: [],
    outputArray: [],
    outputString: '',

    init: function(){
        var self = this;

        self.$filters = $('#Filters');
        self.$reset = $('#Reset');
        self.$container = $('#mixit-container');

        self.$filters.find('ul').each(function(){
            self.groups.push({
                $buttons: $(this).find('.filter'),
                active: ''
            });
        });

        self.bindHandlers();
    },

    bindHandlers: function(){
        var self = this;

        self.$filters.on('click', '.filter', function(e){
            e.preventDefault();

            var $button = $(this);

            $button.hasClass('active') ?
                $button.removeClass('active') :
                $button.addClass('active').siblings('.filter').removeClass('active');

            self.parseFilters();
        });

        self.$reset.on('click', function(e){
            e.preventDefault();

            self.$filters.find('.filter').removeClass('active');

            self.parseFilters();
        });
    },

    parseFilters: function(){
        var self = this;
        for(var i = 0, group; group = self.groups[i]; i++){
            group.active = group.$buttons.filter('.active').attr('data-filter') || '';
        }

        self.concatenate();
    },

    concatenate: function(){
        var self = this;

        self.outputString = '';

        for(var i = 0, group; group = self.groups[i]; i++){
            self.outputString += group.active;
        }

        !self.outputString.length && (self.outputString = 'all');

        console.log(self.outputString);

        if(self.$container.mixItUp('isLoaded')){
            self.$container.mixItUp('filter', self.outputString);
        }
    }
};
$(function(){
    buttonFilter.init();
    $('#mixit-container').mixItUp({
        controls: {
            enable: false
        },
        callbacks: {
            onMixFail: function(){
                alert('No items were found matching the selected filters.');
            }
        }
    });
});