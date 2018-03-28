//Tabs
var links = document.querySelectorAll('.tabs-links li');
var content = document.querySelectorAll('.tabs-content li');
for(var i=0; i < links.length; i++) {
    (function(i) {
       var link = links[i];
       link.onclick = function() {
           for(var j=0; j < content.length; j++) {
              var opacity = window.getComputedStyle(content[j]).opacity;
              if(opacity == "1") {
                 content[j].style.opacity = "0";
              }
           }
        content[i].style.opacity = "1";
        }
    })(i);
};
//Owl Carousel
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoPlay: 2000,
		navigation: true,
		navigationText: ["",""],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
	 		600:{
				items:1,
				nav:true
			},
			1000:{
				items:2,
				nav:true
	        }
	    }
	})
});