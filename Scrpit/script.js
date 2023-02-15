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

    // $(".right-part").hover(function(){
    //     $(".navbar-container").toggle();
    //     $(".right-part").css("width","14rem");
    //     $("#navbar-button-icon").removeClass("bi bi-list").addClass("bi bi-x-lg");
    //     $(".menu-tittle").hide();
    //     $(".header").css("filter","blur(1px)");
    //     $(".number-info").css("filter","blur(1px)");
    //     $(".Services").css("filter","blur(1px)");
    //     $(".Education").css("filter","blur(1px)");
    //     $(".complete-project-part").css("filter","blur(1px)");
    //     $(".recommendation-container").css("filter","blur(1px)");
    //     $(".contact-us-part").css("filter","blur(1px)");
    //     $(".get-in-touch-container").css("filter","blur(1px)");
    // });


    


    // $(".right-part").mouseleave(function(){
    //     $(".right-part").css("width","");
    //     $("#navbar-button-icon").removeClass("bi bi-x-lg").addClass("bi bi-list");
        
    //     $(".menu-tittle").show();



    //     $(".header").css("filter","blur(0)");
    //     $(".number-info").css("filter","blur()");
    //     $(".Services").css("filter","blur()");
    //     $(".Education").css("filter","blur()");
    //     $(".complete-project-part").css("filter","blur()");
    //     $(".recommendation-container").css("filter","blur()");
    //     $(".contact-us-part").css("filter","blur()");
    //     $(".get-in-touch-container").css("filter","blur()");



        
    // });

    // $(".navbar-link").click(function(){
    //     $(".right-part").css("width","");
    //     $("#navbar-button-icon").removeClass("bi bi-x-lg").addClass("bi bi-list");
        
    //     $(".menu-tittle").show();



    //     $(".header").css("filter","blur(0)");
    //     $(".number-info").css("filter","blur()");
    //     $(".Services").css("filter","blur()");
    //     $(".Education").css("filter","blur()");
    //     $(".complete-project-part").css("filter","blur()");
    //     $(".recommendation-container").css("filter","blur()");
    //     $(".contact-us-part").css("filter","blur()");
    //     $(".get-in-touch-container").css("filter","blur()");


    // })


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



var isavailble =true;

if(isavailble==true){
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
