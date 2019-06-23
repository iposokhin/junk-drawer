class Label extends Component {
  constructor( attributes = {} ) {
    super();
    this.createNode( 'label', "http://www.w3.org/1999/xhtml" );
    this.setAttributes( attributes );
  }

  createTextNode( text ) {
    let textNode = document.createTextNode( text );
    this.node.appendChild( textNode );
  }
}