/**
 * Created by any on 07.02.16.
 */
$(document).ready(function() {
    $('#add').click(function(){
        var newItem = $('#add-text').val();
        $('#todo-list').prepend('<li><input id="check" type="checkbox" name="options" value="">' + newItem + '<span class="fa fa-times-circle-o"></span></li>');
        $('#add-text').val('');
        return false;
    });
    $('#todo-list').on('click', '.fa', function() {
        $(this).parent('li').remove();
    });
    $('#todo-list').on('click', '#check', function() {
        $(this).parent('li').css({'text-decoration':'line-through'});
    });
});