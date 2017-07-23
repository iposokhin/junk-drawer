var button = document.querySelector( '.form-content > button' );

button.addEventListener( 'click', function( e ) {
  e.preventDefault();

  let childrens = this.children;
  childrens.some = [].some;

  let alreadyExists = childrens.some( ( child, index, arr ) => {
    return child.classList.contains( 'ink' );
  } );

  if ( !alreadyExists ) {
    let newEl = document.createElement( 'span' );
    newEl.classList.add( 'ink' );
    this.insertBefore( newEl, childrens[ 0 ] );
  }

  childrens.find = [].find;

  let inkEl = childrens.find( ( child, index, arr ) => {
    return child.classList.contains( 'ink' );
  } );

  inkEl.classList.contains( 'animate' ) && inkEl.classList.remove( 'animate' );

  if ( !inkEl.style.height && !inkEl.style.width ) {
    let d = Math.max( this.offsetWidth, this.offsetHeight );
    inkEl.style.height = inkEl.style.width = `${ d }px`;
  }

  let x = e.pageX - this.offsetLeft - parseInt( inkEl.style.width ) / 2,
      y = e.pageY - this.offsetTop - parseInt( inkEl.style.height ) / 2;

  inkEl.style.left = `${ x }px`;
  inkEl.style.top = `${ y }px`;

  inkEl.classList.add( 'animate' );
} );


const inputs = document.querySelectorAll( '.form-el > input' );

inputs.forEach( ( input, index, arr ) => {
  let label = document.querySelector( `label[for=${ input.id }]` );
  
  let oldValue = label.style.top,
      newValue = '0px';

  input.addEventListener( 'focus', function( e ) {
    label.style.top = newValue;
  } );

  input.addEventListener( 'blur', function( e ) {
    if ( input.value ) return;
    label.style.top = oldValue;
  } );
} );