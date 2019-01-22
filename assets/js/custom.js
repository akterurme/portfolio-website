
/*== Progressbar_js ==*/
$('#jq').LineProgressbar({
percentage:70,
radius: '0px',
height: '2px',
fillBackgroundColor: '#fc0'
});
$('#html').LineProgressbar({
percentage:80,
radius: '3px',
height: '2px',
fillBackgroundColor: '#fc0'
});
$('#css').LineProgressbar({
percentage:85,
radius: '3px',
height: '2px',
fillBackgroundColor: '#fc0'
});
$('#bootstrap').LineProgressbar({
percentage:90,
radius: '3px',
height: '2px',
fillBackgroundColor: '#fc0'
});

/*== counterUp_js ==*/
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

 
/*== scrollTop_js ==*/ 
$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 650) {
	    $(".navbar").css({"background-color": "black", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
	 
  }) 
  
/*== scrollup_js ==*/

$(document).ready(function () {
	
	 "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

  
/*== WOW_js ==*/

new WOW().init();

/*======================================
			The End
========================================			
*/