
(function($,undefined) {
    var d;
    var fs;
    var measure;
    var f = function() {
        var w = measure.width();
        var ww = d.width();
        var size = ww/w;
        fs.css({fontSize: size+'em'});
    }
    $(function() {
        d = $('#main');
        fs = $('#main');
        measure = $('.dialog-measure-fs > span');
        f(); // ready
        $(window).resize(f); // resize event
        setTimeout(f, 100); // make sure nobody's fired too early
    });
    $(window).bind("load", function() {
        f(); // webfonts loaded
    });

    $('.hiddenTextLink').on('click',function(){
        $(this).siblings('.hiddenText').toggleClass('visible');
        $(this).parent().toggleClass('opened');
    });

    $('.menu .what-i-do').on('click',function(){
        $('.film, .brands').click();
    });

    $('.menu .about-me').on('click',function(){
        $('.about-me-link').click();
    });

    $('.grid .tile.multiple').hover(function(){
        $('.grid .tile.multiple').addClass('nofilter');
    },function(){
        $('.grid .tile.multiple').removeClass('nofilter');
    });

})(jQuery);
