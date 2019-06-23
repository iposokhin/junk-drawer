class Container extends Component {
  constructor( attributes = {} ) {
    super();
    this.createNode( 'div', "http://www.w3.org/1999/xhtml" );
    this.setAttributes( attributes );
  }
}