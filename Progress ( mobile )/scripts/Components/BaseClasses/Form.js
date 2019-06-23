class Form extends Component {
  constructor( attributes = {} ) {
    super();
    this.createNode( 'form', "http://www.w3.org/1999/xhtml" );
    this.setAttributes( attributes );
  }
}