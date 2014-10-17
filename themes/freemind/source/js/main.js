$(function() {
    var $toc = $("#toc");
    if ( !! $toc.length) {
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
    }


    // highlight the menu
    menuHighlight();

});

//this is adapted from http://css-tricks.com/moving-highlight/
function menuHighlight() {
    var originalBG = $(".nav li").css("background-color"),
        x, y, xy, bgWebKit, bgMoz,
        lightColor = "rgba(255,255,255,0.75)",
        gradientSize = 50;

    $('.nav li')
        .mousemove(function(e) {
            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            xy = x + " " + y;

            // bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", "+gradientSize+", from(rgba(44,108,222,0.8)), to(rgba(66,133,244,1.0))), " + originalBG;
            bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

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