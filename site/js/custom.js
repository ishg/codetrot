$(document).ready(function () {
    $('#home-container h2, #home-container h3, #home-container p').hide();
    $('#home-container').css("width", "0px");
    $('#home-container').css("padding", "0px");
    $('.switch').click(function () {
        var n = $('#home-container').width();
        if (n > 0) {
            $('#home-container h2, #home-container h3, #home-container p').fadeOut(350);
            $('#home-container').animate({
                width: '0',
                padding: '0'
            });
            $('.switch').text('OPEN!');
        }
        else {
            $('#home-container').animate({
                width: '800',
                padding: '40'
            });
            $('#home-container h2, #home-container h3, #home-container p').fadeIn(800);
            $('.switch').text('CLOSE!');
        }
    });
 
});