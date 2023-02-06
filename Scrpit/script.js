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

    $(".navbar-button").click(function(){
        $(".navbar-container").toggle();
        $("..navbar-button").css("background-color","red");
        
    });

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



    $(".get-in-touch-input1").focus(function(){
        $("#get-in-touch-icon1").css({"background-color" : "#F9F871"});
        $("#get-in-touch-icon1").css({"color" : "black"});

    });
    
    $(".get-in-touch-input1").mouseleave(function(){
        $("#get-in-touch-icon1").css({"background-color" : "#033540"});
        $("#get-in-touch-icon1").css({"color" : "white"});
    });

    
    $(".get-in-touch-input2").focus(function(){
        $("#get-in-touch-icon2").css({"background-color" : "#F9F871"});
        $("#get-in-touch-icon2").css({"color" : "black"});

    });
    
    $(".get-in-touch-input2").mouseleave(function(){
        $("#get-in-touch-icon2").css({"background-color" : "#033540"});
        $("#get-in-touch-icon2").css({"color" : "white"});
    });

    
    $(".get-in-touch-input3").focus(function(){
        $("#get-in-touch-icon3").css({"background-color" : "#F9F871"});
        $("#get-in-touch-icon3").css({"color" : "black"});

    });
    
    $(".get-in-touch-input3").mouseleave(function(){
        $("#get-in-touch-icon3").css({"background-color" : "#033540"});
        $("#get-in-touch-icon3").css({"color" : "white"});
    });
    











});
