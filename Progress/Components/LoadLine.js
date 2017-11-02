class LoadLine extends Component {
  constructor() {
    super();
    this.createNode( 'path' );

    this.setAttributes( {
      'd': this.describeArc( 90, 90, 80, 0, 0 ),
      'stroke': '#ffdb4d',
      'stroke-width': 10,
      'fill-opacity': 0,
      'class': 'canvas__loaded loaded'
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

  setNewValue( { progress } ) {
    let loadCoeff = 359.9 / 100;
    this.setAttributes( {
      'd': this.describeArc( 90, 90, 80, 0, progress * loadCoeff )
    } );
  }

  setAnimate( { animate } ) {

    if ( animate ) {
      this.appendNode( new Animation() );
    } else {
      let animations = this.children.filter( child => child instanceof Animation );
      animations.forEach( animation => {
        this.removeNode( animation );
      } )
    }
  }

  update( state, action ) {
    if ( action === 'value' ) {
      this.setNewValue( state );
    } else if ( action === 'animate' ) {
      this.setAnimate( state );
    }
  }
}