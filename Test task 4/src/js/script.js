document.onload = ( function() {
	fetchNewComment( 'GET' ).then( commentsList => {
		commentsList.forEach( ( comment, index, array ) => {
			addComment( comment );
		} );
	} );

	let form = document.querySelector('.header__form');

	form.addEventListener( 'submit', onSubmit );
} )();

function onSubmit( e ) {
	e.preventDefault();
	let userData = serialize();

	fetchNewComment( 'PUT', userData ).then( newComment => {
		addComment( newComment );
		clearForm();
	} );
}

function serialize() {
	let inputs = document.querySelectorAll( '.input' ),
		data = {};

	inputs.forEach( ( input, index, array ) => {
		data[ input.id ] = input.value;
	} );

	return data;	
}

function fetchNewComment( method, comment ) {
	let response = fetch( 'comments.php', {
		method: method,
		body: JSON.stringify( comment ),
		headers: {
        	'Accept': 'application/json, text/plain, */*',
        	'Content-Type': 'application/json; charset=utf-8'
    	}
	} ).then( ( res ) => res.json() );

	return response;
}

function clearForm() {
	let inputs = document.querySelectorAll( '.input' );

	inputs.forEach( ( input, index, array ) => {
		input.value = '';
	} )	
}

function addComment(  { name: author, email, comment } = newComment ) {
	let parentNode = document.querySelector('.comments');

	let markup = `<li class="col-lg-3 col-md-4 col-8 comments__comment comment">
          			<div class="comment__author author text-medium text-white d-flex justify-content-center align-items-center">
            			${ author }
          			</div>
          			<div class="comment__email email text-bold text-center">
            			${ email }
          			</div>
          			<div class="comment__note note text-medium text-center">
            			${ comment }
          			</div>
        		</li>`

    parentNode.innerHTML += markup;
}