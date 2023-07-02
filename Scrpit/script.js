$(document).ready(function () {
  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    //website in mobile mode

    document.addEventListener("DOMContentLoaded", function () {
      var rightPart = document.getElementsByClassName("right-part");
      element.parentNode.removeChild(rightPart);
    });

    $(".left-bar").hide();
    $("#ServicesModal").hide();

    $(".left-menu-icon").click(function () {
      $(".left-bar").toggle();
      // $(".main-content-page").css({'filter':'blur(1px)'});
      // $("body").css({'overflow':'hidden'});
    });

    $("#close-menu-icon").click(function () {
      $(".left-bar").hide();
      $(".main-content-page").css({ filter: "blur(0px)" });
      $("body").css({ overflow: "Scroll" });
    });

    $("body").mouseup(function (e) {
      var container = $(".left-bar");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
      }
    });
  } else {
    //desktop mode
  }

  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });

  // $('body').removeClass('page');
  // var dismissLoadingScreen = function() {
  //     $('.loader-wrapper').hide();
  //     $('body').addClass('page');
  // };

  // var wait3seconds = function() {
  //    return setTimeout(dismissLoadingScreen, 10000);
  // };

  let element = document.getElementsByClassName("body");

  // show after 2 seconds
  // RECOMMENDATION: use window.setTimeout instead of setTimeout
  // NOTE: use a callback function, not an embedded named function
  window.setTimeout(function () {
    element.classList.remove("page");
  }, 2000);

  // hide after 3 seconds
  window.setTimeout(function () {
    element.classList.add("page");
  }, 3000);

  FocusFun(".get-in-touch-input3", "#get-in-touch-icon3");
  FocusFun(".get-in-touch-input2", "#get-in-touch-icon2");
  FocusFun(".get-in-touch-input1", "#get-in-touch-icon1");
  mouseleaveFun(".get-in-touch-input3", "#get-in-touch-icon3");
  mouseleaveFun(".get-in-touch-input2", "#get-in-touch-icon2");
  mouseleaveFun(".get-in-touch-input1", "#get-in-touch-icon1");
  opacity_line();

  function formValidation() {
    var name = document.getElementById("txtname").value;
    var Email = document.getElementById("txtEmail").value;
    var Message = document.getElementById("txtMessage").value;

    if (name == "" && Email == "" && Message == "") {
      $("#errorName").css({ display: "block" });
      $("#errorEmail").css({ display: "block" });
      $("#errorMessage").css({ display: "block" });
    }

    if (name == "") {
      $("#errorName").css({ display: "block" });
    } else {
      if (Email == "") {
        $("#errorEmail").css({ display: "block" });
      } else {
        if (Message == "") {
          $("#errorMessage").css({ display: "block" });
        } else {
          sendEmail();
        }
      }
    }
  }

  $(".-get-in-touch").click(function () {
    formValidation();
  });

  $("#txtname").on("input", function () {
    $("#errorName").hide();
  });

  $("#txtEmail").on("input", function () {
    $("#errorEmail").hide();
  });

  $("#txtMessage").on("input", function () {
    $("#errorMessage").hide();
  });

  function FocusFun(selector, elementmod) {
    $(selector).focus(function () {
      $(elementmod).css({ "background-color": "#F9F871" });
      $(elementmod).css({ color: "black" });
    });
  }

  function mouseleaveFun(selector, elementmod) {
    $(selector).mouseleave(function () {
      $(elementmod).css({ "background-color": "#033540" });
      $(elementmod).css({ color: "white" });
    });
  }

  function visibility(isavailble) {
    if (isavailble == false) {
      $(Document).ready(function () {
        $(".page").hide();
        $("body").css({ "background-image": "url(/img/website_image.png)" });
        $("body").css({ "background-repeat": "no-repeat" });
        // $('body').css({'background-size':'cover'});
        $("body").css({ "text-size-adjust": "none" });
        $("#OutOfServicesMessage").removeClass("").addClass("Website-work-div");
        $("#OutOfServicesMessage>h2")
          .removeClass("")
          .addClass("Website-work-text");
      });
    } else {
      $(Document).ready(function () {
        $("#OutOfServicesMessage").hide();
      });
    }
  }

  function sendEmail() {
    var txtName = document.getElementById("txtname").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var txtMessage = document.getElementById("txtMessage").value;

    var content ='<p><strong><span style="font-family: Helvetica;">Name&nbsp;</span></strong><span style="font-family: Helvetica;"><strong>:&nbsp;</strong>'+txtName+'</span></p><p><span style="font-family: Helvetica;"><strong>Email</strong> <strong>:&nbsp;</strong>'+txtEmail+'</span></p><p><span style="font-family: Helvetica;"><strong>Message : </strong>'+txtMessage+'</span></p>'

    // var content ='	<div class="container">		<div class="space-y-4 mb-6">			<h1 class="text-4xl fw-800">New Client</h1>		</div>		<div class="card rounded-3xl px-4 py-8 p-lg-10 mb-6">			<table class="p-2 w-full">				<tbody>					<tr>						<td>Name</td>						<td class="text-right">'+txtName+'</td>					</tr>					<tr>						<td>Email</td>						<td class="text-right">'+txtName+'</td>					</tr>					<tr>						<td>Message</td>						<td class="text-right">'+txtMessage+'</td>					</tr>				</tbody>			</table>			<hr class="my-6">		</div>	</div>';



    Email.send({
      SecureToken: "e25da4b0-622e-4a93-b301-b32ca5bb6072",
      To: "jel.alae37@gmail.com",
      From: "jel.alae37@gmail.com",
      Subject: "New client From Portfolio",
      Body: content,
    }).then((message) => alert(message));
  }

  function opacity_line() {
    var lastScrollTop = 0;
    $(".personal-info").scroll(function (event) {
      var st = $(this).scrollTop();
      if (st < lastScrollTop) {
        $("#line-first").css("opacity", 1);
        $("#line-second").css("opacity", 1);
      } else {
        $("#line-first").css("opacity", 1);
        $("#line-second").css("opacity", 1);
      }
      lastScrollTop = st;
    });
  }

  // const RenewDiv=()=>{
  //     let div = document.getElementsByClassName('imagePanel');
  //     div.remove();
  //     let NewDiv = document.createElement('div');
  //     NewDiv.className = 'imagePanel';
  //     $('body').append(NewDiv);
  // }

  $(".card-img").on("click", function () {
    let ImgPickeraID = $(this).attr("id");
    let img = document.getElementById(ImgPickeraID);
    let NewImage = img.cloneNode(true);
    $("#imagepreview").attr("src", $(NewImage).attr("src"));
    $("#imagemodal").modal("show");
  });
  

  //close the left bar when the user click outside of it

  $("#OrderNowServices").on("click", function () {
    $("#ServicesModal").modal("show");
  });

  $("#btnCloseModal").on("click", function () {
    $("#ServicesModal").modal("hide");
  });


  $("#OrderNowServices1 , #OrderNowServices2 , #OrderNowServices3").on(
    "click",
    function () {
      $("#txtMessage").val("");
      var ParentId = $("#" + $(this).attr("id"))
        .parent()
        .attr("id");
      var FisrtChildText = $("#" + ParentId + ">h2").text();
      if (FisrtChildText) {
        var Message;
        if (FisrtChildText == "Front-End Development") {
          Message =
            "I wanted to get in touch with you about an exciting collaboration opportunity in front-end development.";
        } else if (FisrtChildText == "Back-End Development") {
          Message =
            "I wanted to get in touch with you about an exciting collaboration opportunity in Back-End Development.";
        } else if (FisrtChildText == "Sound Design") {
          Message =
            "I wanted to get in touch with you about an exciting collaboration opportunity in Sound Design.";
        }
         $("#txtMessage").val(Message);
      }

      // alert('sallam');
    }
  );
  var typed = new Typed(".multiple-text",{
    strings: ["WorkSpace!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true});



    
});
