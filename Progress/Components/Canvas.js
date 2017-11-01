class Canvas extends Component {
  constructor() {
    super();
    this.createNode( 'svg' );

    this.setAttributes( {
      'width': 500,
      'height': 500,
      'viewBox': '0 0 500 500',
      'class': 'progress'
    } );
  }

  update( state ) {
    this.ownState = Object.assign( {}, this.ownState, state );

    if ( state.hide ) {
      this.setAttributes( {
        'visibility': 'hidden'
      } );
    } else {
      this.setAttributes( {
        'visibility': 'visible'
      } )
    }
  }
}