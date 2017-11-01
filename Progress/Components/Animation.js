class Animation extends Component {
  constructor() {
    super();
    this.createNode( 'animateTransform' );

    this.setAttributes( {
      'attributeName': 'transform',
      'attributeType': 'XML',
      'type': 'rotate',
      'from': '0 250 250',
      'to': '360 250 250',
      'dur': '3s',
    } );
  }

  run() {
    this.setAttributes( {
      'repeatCount': 'indefinite'
    } )
  }

  stop() {
    this.setAttributes( {
      'repeatCount': '0'
    } )
  }
}