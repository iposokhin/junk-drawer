let widget = document.querySelector( '#map-widget' );

let paper = Snap( 1000, 700 );

widget.appendChild( paper.node );
paper.attr( 'viewBox', '0,200,1000,700' );

let pattern = paper.image( "assets/images/pattern.svg", 0, 200, 1000, 700 )
      .pattern( 0, 200, 1000, 700 ),

    gradient = paper.gradient( 'L(0,200,1000,700)#E4E9F6-#FFFFFF' ),
    filter = paper.filter( Snap.filter.hueRotate( 180 ) );

let federalDistricts = fetch( 'assets/data.json', {
      method: 'get'
    } )

    .then( ( response ) => {
      return response.json();
    } )

    .then( ( data ) => {
      let background = paper.rect( 0, 200, 1000, 700 )
            .attr( {
              'fill': gradient
            } );

      let defaultText = 'РОССИЯ',
          label = paper
            .text( {
              'text': [
                'РОССИЯ',
                ''
              ]
            } )

            .attr( {
              'fill': '#fff',
              'class': 'map-label'
            } )

            .selectAll( 'tspan' ).forEach( ( tspan, index ) => {
              tspan
                .attr( {
                  'x': 40,
                  'y': 280 + 30 * ( index )
                } )
            } );


            console.log( label );

      let wholeMap = paper.path( data.wholeMap.path )
            .attr( {
              'fill': pattern
            } );         

      data.regions.forEach( ( region ) => {

        let shape = paper.path( region.path )
          .attr( {
            'fill': pattern,
            'class': 'shape',
            'data-name': region.name
          } );

          shape.click( ( event ) => {
            window.location.href = region.link;
          } );

          shape.hover( 
            ( event ) => {
              shape.attr( {
                'filter': filter
              } );
              
              label[ 0 ].node.innerHTML = region.name.toUpperCase();
              label[ 1 ].node.innerHTML = 'ФЕДЕРАЛЬНЫЙ ОКРУГ';
            },
            ( event ) => {
              shape.attr( {
                'filter': null
              } )

              label[ 0 ].node.innerHTML = defaultText;
              label[ 1 ].node.innerHTML = '';
            } )
      } );
    } )

    .catch( ( err ) => {
      console.error( err );
    } );    