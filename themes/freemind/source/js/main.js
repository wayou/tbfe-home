$(function() {
    var $toc = $("#toc");
    if ( !! $toc.length && screen.width > 999) {
        $("#toc").tocify({
            context: '.mypage',
            scrollHistory: true,
            theme: 'bootstrap3',
            selectors: 'h1,h2'
        });

        //sticky the toc
        var $window = $(window),
            $stickyEl = $('#toc'),
            elTop = $stickyEl.offset().top;
        $window.scroll(function() {
            $stickyEl.toggleClass('sticky-scroll', $window.scrollTop() > elTop - 110);
        });

        //fix for page refresh the toc not in right position
        // if ($window.scrollTop() > elTop - 110) {
        //     setTimeout(function() {
        //         $stickyEl.addClass('sticky-scroll');
        //     },1000);
        // }
    }

    // highlight the menu
    menuHighlight();

});

//this is adapted from http://css-tricks.com/moving-highlight/
function menuHighlight() {
    var originalBG = $(".nav li").css("background-color"),
        x, y, xy, bgWebKit, bgMoz,
        lightColor = "rgba(44,108,222,0.9)",
        gradientSize = 60;

    $('.nav li')
        .mousemove(function(e) {
            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(66,133,244,1.0))), " + originalBG;
            bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, rgba(66,133,244,1.0) " + gradientSize + "px)";

            $(this)
                .css({
                    background: bgWebKit
                })
                .css({
                    background: bgMoz
                });

        }).mouseleave(function() {
            $(this).css({
                background: originalBG
            });
        });
}