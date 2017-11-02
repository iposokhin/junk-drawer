class Canvas extends Component {
  constructor() {
    super();
    this.createNode( 'svg' );

    this.setAttributes( {
      'width': 180,
      'height': 180,
      'viewBox': '0 0 180 180',
      'class': 'progress__canvas'
    } );
  }

  update( state ) {
    this.ownState = Object.assign( {}, this.ownState, state );

    if ( state.hide ) {
      this.setAttributes( {
        'style': 'display: none;'
      } );
    } else {
      this.setAttributes( {
        'style': 'display: block;'
      } )
    }
  }
}