$(function () {

    $('#titulo').click(function() {
        alert('AUDREY LINDA!!!!!!!!!!!!')
        $('#contato').animate({
            opacity: 0.25,
            left: '-=50',
            height: 'toggle'
            }, 5000, function() {
            // Animation complete.
        });
    });


});
