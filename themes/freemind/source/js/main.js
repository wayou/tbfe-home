$(function() {
    $("#toc").tocify({
        context: '.mypage',
        scrollHistory: true,
        theme: 'bootstrap3',
        selectors: 'h1,h2'
    });

    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#toc').addClass('stick');
    } else {
        $('#toc').removeClass('stick');
    }
}