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

    $('.bxslider').bxSlider();

});
