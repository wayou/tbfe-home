$(function() {
    $("#toc").tocify({
        context:'.mypage',
        scrollHistory:true,
        theme:'bootstrap3',
        selectors:'h1,h2'
    });
    $(window).on('scroll',function(){
        // $('.tocify-item.list-group-item.active').closest('.tocify-subheader.list-group').prev().addClass('');
    });
});