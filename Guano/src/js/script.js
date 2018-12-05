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

  let dropZone = document.querySelector('#hero-face'),
  	  maxFileSize = 1000000;

  dropZone.ondragover = ( e ) => {
  	e.stopPropagation();
  	e.preventDefault();
  	e.dataTransfer.dropEffect = 'copy';
  	console.dir( e );
  	return false;
  };


  dropZone.ondrop = ( e ) => {
  	e.stopPropagation();
  	e.preventDefault();
  	e.dataTransfer.dropEffect = 'copy';
  	console.dir( e.dataTransfer.files[0] );
  	let reader = new FileReader();
  	reader.onload = ( event ) => {
  		console.dir( event );
  	}
  	console.dir( reader.readAsDataURL(e.dataTransfer.files[0]) );

  	return false;
  } 
});

