class Input extends Component {
  constructor( attributes = {} ) {
    super();

    this.createNode( 'input', "http://www.w3.org/1999/xhtml" );
    this.setAttributes( attributes );
  }
}