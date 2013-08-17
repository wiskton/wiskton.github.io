$(function () {

    $('.menuItem').on('click', function(event){
        event.preventDefault();

        var paginaAtual = $(this).attr('rel');
        var paginaAnterior = '';

        paginaAnterior = location.href.split('/#')
        paginaAnterior = paginaAnterior[1];

        location.href = '#'+paginaAtual;

        if( paginaAtual != paginaAnterior ){
            $('#menu').addClass(paginaAtual + '_menu');
            $('#'+paginaAtual).addClass('select');
            if( paginaAnterior ){
                $('#menu').removeClass(paginaAnterior + '_menu');
                $('#'+paginaAnterior).removeClass('select');
            }
        }

    });



    // $('.pagina').each(function(){
    //     var elemento = $(this);
    //     alert( elemento.attr('id') );
    // });

    // $('body').find('div').each(function(){  var elemento = $(this) });

    // $('#btnHome').on('click', function(event){
    //     event.preventDefault();

    //     var paginaAtual = 'home'
    //     var paginaAnterior = '';

    //     paginaAnterior = location.href.split('/#')
    //     paginaAnterior = paginaAnterior[1];

    //     location.href = '#'+paginaAtual;

    //     $('#'+paginaAtual).addClass(paginaAtual + '_menu');
    //     $('#'+paginaAtual).addClass('select');
    //     if( paginaAnterior ){
    //         $('#'+paginaAnterior).removeClass(paginaAnterior + '_menu');
    //         $('#'+paginaAnterior).removeClass('select');
    //     }

    //     // $('#menu').addClass('home_menu');
    //     // $('#menu').removeClass('about_menu');
    //     // $('#menu').removeClass('websites_menu');
    //     // $('#menu').removeClass('contact_menu');
    //     // $('#home').addClass('select');
    //     // $('#about').removeClass('select');
    //     // $('#websites').removeClass('select');
    //     // $('#contact').removeClass('select');
    // });


    // $('#btnAbout').on('click', function(event){
    //     event.preventDefault();

    //     var paginaAtual = 'about'
    //     var paginaAnterior = '';

    //     paginaAnterior = location.href.split('/#')
    //     paginaAnterior = paginaAnterior[1];

    //     location.href = '#'+paginaAtual;

    //     $('#'+paginaAtual).addClass(paginaAtual + '_menu');
    //     $('#'+paginaAtual).addClass('select');
    //     if( paginaAnterior ){
    //         $('#'+paginaAnterior).removeClass(paginaAnterior + '_menu');
    //         $('#'+paginaAnterior).removeClass('select');
    //     }

    //     // $('#menu').removeClass('home_menu');
    //     // $('#menu').addClass('about_menu');
    //     // $('#menu').removeClass('websites_menu');
    //     // $('#menu').removeClass('contact_menu');
    //     // $('#home').removeClass('select');
    //     // $('#about').addClass('select');
    //     // $('#websites').removeClass('select');
    //     // $('#contact').removeClass('select');
    // });

    // $('#btnWebsites').on('click', function(event){
    //     event.preventDefault();

    //     var paginaAtual = 'websites'
    //     var paginaAnterior = '';

    //     paginaAnterior = location.href.split('/#')
    //     paginaAnterior = paginaAnterior[1];

    //     location.href = '#'+paginaAtual;

    //     $('#'+paginaAtual).addClass(paginaAtual + '_menu');
    //     $('#'+paginaAtual).addClass('select');
    //     if( paginaAnterior ){
    //         $('#'+paginaAnterior).removeClass(paginaAnterior + '_menu');
    //         $('#'+paginaAnterior).removeClass('select');
    //     }

    //     // $('#menu').removeClass('home_menu');
    //     // $('#menu').removeClass('about_menu');
    //     // $('#menu').addClass('websites_menu');
    //     // $('#menu').removeClass('contact_menu');
    //     // $('#home').removeClass('select');
    //     // $('#about').removeClass('select');
    //     // $('#websites').addClass('select');
    //     // $('#contact').removeClass('select');
    // });

    // $('#btnContact').on('click', function(event){
    //     event.preventDefault();

    //     var paginaAtual = 'contact'
    //     var paginaAnterior = '';

    //     paginaAnterior = location.href.split('/#')
    //     paginaAnterior = paginaAnterior[1];

    //     location.href = '#'+paginaAtual;


    //     $('#menu').addClass(paginaAtual + '_menu');
    //     $('#'+paginaAtual).addClass('select');
    //     if( paginaAnterior ){
    //         $('#menu').removeClass(paginaAnterior + '_menu');
    //         $('#'+paginaAnterior).removeClass('select');
    //     }

    //     // $('#menu').removeClass('home_menu');
    //     // $('#menu').removeClass('about_menu');
    //     // $('#menu').removeClass('websites_menu');
    //     // $('#menu').addClass('contact_menu');
    //     // $('#home').removeClass('select');
    //     // $('#about').removeClass('select');
    //     // $('#websites').removeClass('select');
    //     // $('#contact').addClass('select');
    // });


    // $(document).scroll(function(){

    //     if ( $(document).scrollTop() >= $('#home').height() ) {
    //         $('#menu').addClass('about_menu');
    //     } else {
    //         $('#menu').removeClass('about_menu');
    //     }

    //     if ( $(document).scrollTop() >= $('#home').height()+$('#about').height() ) {
    //         $('#menu').addClass('websites_menu');
    //     } else {
    //         $('#menu').removeClass('websites_menu');
    //     }

    //     if ( $(document).scrollTop() >= $('#home').height()+$('#about').height()+$('#websites').height() ) {
    //         $('#menu').addClass('contact_menu');
    //     } else {
    //         $('#menu').removeClass('contact_menu');
    //     }

    // });

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
