/**
 * Created by bindunani on 5/13/15.
 */
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.intro');
    var offset = startchange.offset();
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top + 200){
            $('.navbar').css({'background-color':'black'});
        }else{
            $('.navbar').css({'background-color':'transparent'});
        }
        if(scroll_start > 200){
            $('nav').addClass('shrink');
        }else{
            $('nav').removeClass('shrink');
        }
    });

    var main = $('#mynav ul');
    $('.scroll').click(function(){
        event.preventDefault();
        var full_url = this.href,
        parts= full_url.split('#'),
        trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top;

        $('html , body').animate({scrollTop:target_top},500);
        main.children().removeClass();
        $(this).parent().addClass('active');
    });

});