class LoadLine extends Component {
  constructor() {
    super();
    this.createNode( 'path' );

    this.setAttributes( {
      'd': describeArc( 250, 250, 50, 0, 0 ),
      'stroke': '#ffdb4d',
      'stroke-width': 5,
      'fill-opacity': 0,
      'class': 'progress_loaded'
    } );
  }

  polarToCartesian ( centerX, centerY, radius, angleInDegrees ) {
    let angleInRadians = ( angleInDegrees - 90 ) * Math.PI / 180;
    
    return {
      x: centerX + ( radius * Math.cos( angleInRadians ) ),
      y: centerY + ( radius * Math.sin( angleInRadians ) )
    };      
  }

  describeArc ( x, y, radius, startAngle, endAngle ) {
    let start = this.polarToCartesian( x, y, radius, endAngle ),
        end = this.polarToCartesian( x, y, radius, startAngle ),
        largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  
    let d = `M ${ start.x } ${ start.y } A ${ radius } ${ radius }, 0, ${ largeArcFlag }, 0, ${ end.x } ${ end.y }`;
  
    return d;       
  }
}