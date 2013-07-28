$(document).ready(function () {
    var images = ['14.jpg', '6.jpg', '7.jpg', '8.jpg', '10.jpg', '11.jpg', '15.jpg', '16.jpg','17.jpg','18.jpg'];
    $('body').css({ 'background-image': 'url(images/Photos/' + images[Math.floor(Math.random() * images.length)] + ')' });
});