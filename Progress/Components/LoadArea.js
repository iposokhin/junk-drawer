class LoadArea extends Component {
  constructor() {
    super();
    this.createNode( 'circle' );
    
    this.setAttributes( {
      'cx': 250,
      'cy': 250,
      'r': 50,
      'stroke': '#efefec',
      'stroke-width': 5,
      'fill-opacity': 0,
      'class': 'progress_load-area'
    } );
  }
}