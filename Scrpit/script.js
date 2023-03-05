var isavailble =true;

if(isavailble==false){
    $(Document).ready(function(){
        $('.page').hide();
        $('body').css({'background-image':'url(/img/website_image.png)'});
        $('body').css({'background-repeat':'no-repeat'});
        // $('body').css({'background-size':'cover'});
        $('body').css({'text-size-adjust':'none'});
        $('#OutOfServicesMessage').removeClass("").addClass("Website-work-div");
        $('#OutOfServicesMessage>h2').removeClass("").addClass("Website-work-text");
    });
}
else{
    $(Document).ready(function(){
        $('#OutOfServicesMessage').hide();
    }); 
}






$(Document).ready(function(){
    
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



    var mediaQuery = window.matchMedia("(max-width: 641px)");

    if (mediaQuery.matches) {
        $(".left-bar").hide();

        $(".left-menu-icon").click(function(){
            $(".left-bar").toggle();
            $(".main-content-page").css({'filter':'blur(1px)'});
            $("body").css({'overflow':'hidden'});
        });


        $(".left-bar").mouseleave(function(){
            $(".left-bar").hide();
            $(".main-content-page").css({'filter':'blur(0px)'});
            $("body").css({'overflow':'Scroll'});
        });

     }




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






