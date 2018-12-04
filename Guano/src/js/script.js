$(document).ready(function(){
  $('.heroes').slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 2000,
  	dots: true,
  	responsive: [
    	{
    	  breakpoint: 1024,
    	  settings: {
    	    slidesToShow: 3,
    	    slidesToScroll: 1,
    	    infinite: true,
    	    dots: true
    	  }
    	},
    	{
    	  breakpoint: 512,
    	  settings: {
    	    slidesToShow: 1,
    	    slidesToScroll: 1,
    	    infinite: true,
    	    dots: false
    	  }
    	},
  	]
  } );
});