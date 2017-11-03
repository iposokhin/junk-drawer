class LoadArea extends Component {
  constructor() {
    super();
    this.createNode( 'circle' );
    
    this.setAttributes( {
      'cx': 90,
      'cy': 90,
      'r': 80,
      'stroke': '#efefec',
      'stroke-width': 10,
      'fill-opacity': 0,
      'class': 'canvas_load-area load-area'
    } );
  }
}