$(function () {

    // $(window).resize(function(){
    //     var t = $('#home').height();
    // });

    $(document).scroll(function(){

        if ( $(document).scrollTop() > $('#home').height()-2 ) {
            $('#menu').addClass('about_menu');
        } else {
            $('#menu').removeClass('about_menu');
        }

        if ( $(document).scrollTop() > $('#home').height()+$('#about').height()-2 ) {
            $('#menu').addClass('websites_menu');
        } else {
            $('#menu').removeClass('websites_menu');
        }

        if ( $(document).scrollTop() > $('#home').height()+$('#about').height()+$('#websites').height()-2 ) {
            $('#menu').addClass('contact_menu');
        } else {
            $('#menu').removeClass('contact_menu');
        }

    });

    // $('#btnHome').click(function() {

    //     $("#home").show();
    //     $("#contact").hide();
    //     $("#websites").hide();
    //     $("#about").hide();

    // });

    // $('#btnAbout').click(function() {

    //     $("#about").show();
    //     $("#home").hide();
    //     $("#contact").hide();
    //     $("#websites").hide();

    // });

    // $('#btnWebsites').click(function() {

    //     $("#websites").show();
    //     $("#home").hide();
    //     $("#about").hide();
    //     $("#contact").hide();

    // });

    // $('#btnContact').click(function() {

    //     $("#contact").show();
    //     $("#home").hide();
    //     $("#websites").hide();
    //     $("#contact").hide();

    // });



    // if( $('#home').scrollTop(100) ){


    //     console.log('aee');
    //     $('#menu').addClass('about_menu');
    //     // $("#menu").css({
    //     //     'background': 'red'
    //     // })

    // }


});
