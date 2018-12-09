$(document).ready(function(){

  let heroes = getHeroesList().then( ( res ) => res.json() ).then( ( heroesList ) => {
  	
  	if ( heroesList.length > 0 ) {
  		removeStub();
	  	heroesList.forEach( ( hero, index, list ) => {
	  		addHero( hero );
	  	} );

	  	setConfig( heroesList.length );
  	}
  } );

  let dropZone = document.querySelector('#hero-face');
  dropZone.ondrop = imageLoad;
  dropZone.onchange = imageLoad;

  let form = document.querySelector('.heroes-form');
  form.onsubmit = submit;
});

function submit ( e ) {
	e.preventDefault();
	e.stopPropagation();

  	let data = serialize();
  	postData( data ).then( ( res ) => res.json() ).then( (data) => {
  		if ( $('.hero').length > 0 ) {
  			console.dir( $('.hero') );
  			$('.heroes').slick('unslick');
  		}

  		removeStub();
  		addHero( data );
  		setConfig( $('.heroes')[0].children.length );
  	} );
  	clearForm();
  	
  	return false;	
}

function removeStub() {
	$('#stub').remove();
}

function setConfig( count ) {
  	$('.heroes').slick({
  		infinite: true,
  		slidesToShow: count >= 4 ? 4: count || 1,
  		slidesToScroll: 1,
  		dots: true,
  		centerMode: true,
  		responsive: [
  	  	{
  	  	  breakpoint: 1024,
  	  	  settings: {
  	  	    slidesToShow: count >= 3 ? 3: count,
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
}

function getHeroesList() {
   return fetch( 'hero.php' );	
}

function addHero( hero ) {
	let markup = `<div class="col hero">
              			<img class="hero__miniature img-fluid rounded-circle mx-auto d-block" src=${hero.heroFace} alt=${hero.heroName}>
              			<div class="hero__name d-flex flex-column text-center">
                			<span class="text-bolder">${hero.heroName}</span>
                			<span class="hero__nickname nickname">${hero.heroTitle}</span>
              			</div>
              			<div class="hero__join join d-flex flex-column text-center">
                			<span>
                  				Дата вступления в команду:
                			</span>
                			<span>
                  				${hero.heroDate}
                			</span>
              			</div>
            		</div>`;

	$('.heroes').append( markup );
}

function postData( obj ) {
  	return fetch( 'hero.php', {
  		method: 'PUT',
  		body: JSON.stringify( obj ),
  		headers: {
        	'Accept': 'application/json, text/plain, */*',
        	'Content-Type': 'application/json; charset=utf-8'
    	},
  	} );	
}

function serialize() {
	let inputArr = document.querySelectorAll( '.heroes-form input:not([type="submit"])' );
	let data = {};
	inputArr.forEach( ( input, index, arr) => {
		let isValid = input.type == 'file' ? checkInput( input, 'myValue' ): checkInput( input, 'value' );
		if ( !isValid ) return console.error( `Поле ${input.name} заполнено неправильно!!!` );
		data[toCamelCase(input.name)] = input.type == 'file' ? input['myValue']: input['value'];
	} );
	console.dir( data );
	return data;
}

function toCamelCase ( string ) {
	let arr = string.split('-');
	let camelCaseStr = '';
	arr.forEach( ( substr, index, arr ) => {
		if ( index > 0 ) {
			camelCaseStr += substr.slice( 0,1 ).toUpperCase() + substr.slice( 1 );			
		} else {
			camelCaseStr += substr;
		}
	} );
	return camelCaseStr;
}

function checkInput( input, prop ) {
	return input[prop].trim() !== '';
}

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

function clearForm() {
	let inputArr = document.querySelectorAll( '.heroes-form input:not([type="submit"])' );
		inputArr.forEach( ( input, index, arr ) => {
			input.value = "";
		} );
		changeFileInputValue("");
		changeLabelText("Перетащите или выберите фото");
}