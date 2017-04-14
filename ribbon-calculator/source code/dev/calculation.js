var button = document.querySelector( '.form-content > button' );

button.addEventListener( 'click', function( e ) {
  let w = 0, l = 0, n = 0, area = 0, perSquareMeter = 10, priceOne = 0, priceAll = 0;

  function getArea( width, length ) {
    return width * length / 1000;
  }

  function getPriceForOne( area, priceForSquareMeter ) {
    return area * priceForSquareMeter;
  }

  function getOrderPrice( quantity, priceForOne ) {
    return quantity * priceForOne;
  }

  w = ribbonWidth.value || 0;
  l = ribbonLength.value || 0;
  n = ribbonQuantity.value || 0;
  
  area = getArea( w, l );
  priceOne = getPriceForOne( area, perSquareMeter );
  priceAll = getOrderPrice( n, priceOne );

  oneRibbon.innerHTML = priceOne.toFixed( 1 );
  order.innerHTML = priceAll.toFixed( 1 );
} );