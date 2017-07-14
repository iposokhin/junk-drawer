document.querySelector( '.svg' ).addEventListener( 'load', function() {
  let svgDoc = this.getSVGDocument(),
      regions = svgDoc.querySelectorAll( '.shape' );

  regions.forEach( function( region, arr, index ) {
    region.addEventListener( 'mouseover', function( event ) {
      let target = event.target || event.srcElement,
          activePicture = target.nextElementSibling;

          console.log( target );
          console.log( activePicture );
      
      activePicture.classList.add( 'active-image' );      
      activePicture.classList.remove( 'not-active-image' );

      let title = document.querySelector( '.fo-name' ),
          nameFO = activePicture.dataset.name;
      
      title.innerText = `${ nameFO } \r\nФедеральный Округ`;
    }, false );

    region.addEventListener( 'mouseout', function( event ) {
      let target = event.target || event.srcElement,
          activePicture = target.nextElementSibling;

      activePicture.classList.add( 'not-active-image' );
      activePicture.classList.remove( 'active-image' );

      let title = document.querySelector( '.fo-name' );      
      title.innerText = 'РОССИЯ';
    }, false );

    region.addEventListener( 'click', function( event ) {
      let target = event.target || event.srcElement,
          activePicture = target.nextElementSibling,
          link = activePicture.dataset.link;

      window.location.href = link;
    } );
  } );
} );