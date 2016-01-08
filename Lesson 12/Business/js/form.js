$(document).ready(function() {
    $('.form-active').click(function () {
        $('.window-form-overlay').slideToggle(250);
        return false;
    });
    $(".close-form").click(function () {
        $('.window-form-overlay').hide("slow");
    });
});
