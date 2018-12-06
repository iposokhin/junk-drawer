$(document).ready(function(){
	
// slick-carousel config
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



  let dropZone = document.querySelector('#hero-face');

  dropZone.ondrop = imageLoad;
  dropZone.onchange = imageLoad;
});

function imageLoad ( e ) {
	e.stopPropagation();
	e.preventDefault();

	let eventType = e.type,
		file;

	if ( eventType == 'drop' ) {
		file = e.dataTransfer.files[0];
	} else if ( eventType == 'change' ) {
		file = this.files[0];
	}

	let fileSize = file.size;
	if( isLarge( fileSize ) ) return console.error( 'Файл слишком большой!!!' );

	let fileMIME = file.type;	
	if ( !isImage( fileMIME )) return console.error( 'Вы загрузили не изображение!!!' );

	readFile( file );
}

function isLarge( size ) {
	return size > 1000000 ? true : false;
}

function readFile( file ) {
	let reader = new FileReader();
		reader.readAsDataURL( file );
	reader.onload = ( e ) => imageLoaded( e, file );
}

function isImage( fileMIME ) {
	if ( fileMIME.search( /image.*/ ) != -1 ) {
		return true;
	}
	return false;
}

function changeElState ( el, propState, newState ) {
	if ( !HTMLElement.prototype.isPrototypeOf( el ) ) {
		return console.error( 'Вы передали не HTML-элемент!!!' )
	}
	el[propState] = newState;
	return false;
}

function imageLoaded ( e, file ) {
	let data = e.target.result;
	changeFileInputValue( data );
	changeLabelText( `Загружено изображение ${ file.name }` );
	return false;
}

function changeFileInputValue ( value ) {
	let input = document.querySelector('#hero-face');
	return changeElState( input, 'myValue', value );
}

function changeLabelText ( text ) {
	let label = document.querySelector('.hero-face__value');
	return changeElState( label, 'innerHTML', text );
}