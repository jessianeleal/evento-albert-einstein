// var posicaoInicial = $('#descricaoEvento').position().top;
// $(document).scroll(function () { // oscultador de scroll
//     var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
//      if (posicaoInicial < posicaoScroll) $('#descricaoEvento').addClass("animated");
// })


var $target = $('.anima'),
    animationClass = 'animated fadeInRight slower',
    offset = $(window).height() * 3/4;

function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $(this).removeClass('anima')
            $(this).addClass(animationClass)
            console.log(this)
        }
    })
}

animeScroll();

$(document).scroll(function(){
    animeScroll();
})


var $target2 = $('.anima2'),
    animationClass2 = 'animated rubberBand slower',
    offset2 = $(window).height() * 3/4;

function anime2Scroll() {
    var documentTop = $(document).scrollTop();
    $target2.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset2) {
            $(this).removeClass('anima2')
            $(this).addClass(animationClass2)
            console.log(this)
        }
    })
}

anime2Scroll();

$(document).scroll(function(){
    anime2Scroll();
})



var $target3 = $('.anima3'),
    animationClass3 = 'animated tada slow',
    offset3 = $(window).height() * 3/4;

function anime3Scroll() {
    var documentTop = $(document).scrollTop();
    $target3.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset3) {
            $(this).removeClass('anima3')
            $(this).addClass(animationClass3)
            console.log(this)
        }
    })
}

anime3Scroll();

$(document).scroll(function(){
    anime3Scroll();
})


var $target4 = $('.anima4'),
    animationClass4 = 'animated fadeInLeft slower',
    offset4 = $(window).height() * 3/4;

function anime4Scroll() {
    var documentTop = $(document).scrollTop();
    $target4.each(function() {
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset4) {
            $(this).removeClass('anima4')
            $(this).addClass(animationClass4)
            console.log(this)
        }
    })
}

anime4Scroll();

$(document).scroll(function(){
    anime4Scroll();
})