class Animation extends Component {
  constructor() {
    super();
    this.createNode( 'animateTransform' );

    this.setAttributes( {
      'attributeName': 'transform',
      'attributeType': 'XML',
      'type': 'rotate',
      'from': '0 90 90',
      'to': '360 90 90',
      'dur': '3s',
      'repeatCount': 'indefinite'
    } );
  }
}