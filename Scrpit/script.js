$(Document).ready(function(){
    // $(".Card-service-link").hover(function(){
    //     $(".Card-service-link-icon").css({"margin-left": "10rem"});
    // });


    // $(".Card-service-link").after(function(){
    //     $(".Card-service-link-icon").css({"margin-left": ""});
    // });

    // $(".personal-info").on('scroll',function(){
    //     $("#line-first").hide();
    // });

    // $("#card-personal-info").animate({
    //     scrollTop: 
    //     $("#line-first","#line-second").hide()
    // }); 



    var lastScrollTop =0;
    $(".personal-info").scroll(function(event){
        var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $("#line-first").css('opacity',1);
            $("#line-second").css('opacity',1);
            } else {
            $("#line-first").css('opacity',1);
            $("#line-second").css('opacity',1);
        }
        lastScrollTop = st;


    });



    $(".get-in-touch-input").click(function(){
        $(".get-in-touch-icon").css({"background-color" : "red"}).fadeOut(2000);
    });
    









});


