class roundProgressUI {
  constructor( targetNode = document.body ) {
    let ns = "http://www.w3.org/2000/svg";  
    
    let svgAttrs = {
      'width': 500,
      'height': 500,
      'viewBox': '0 0 500 500',
      'class': 'progress'
    }
    
    let svg = createNode( ns, "svg", svgAttrs );
    
    let loadAreaAttrs = {
      'cx': 250,
      'cy': 250,
      'r': 50,
      'stroke': '#efefec',
      'stroke-width': 5,
      'fill-opacity': 0,
      'class': 'progress_load-area'
    }
    
    let loadArea = createNode( ns, 'circle', loadAreaAttrs );
    
    let loadedAttrs = {
      'd': describeArc( 250, 250, 50, 0, 0 ),
      'stroke': '#ffdb4d',
      'stroke-width': 5,
      'fill-opacity': 0,
      'class': 'progress_loaded'
    }
    
    let loaded = createNode( ns, 'path', loadedAttrs );
    
    appendNode( loadArea, svg );
    appendNode( loaded, svg );
    appendNode( svg, targetNode );
  
    this.progressEl = loaded;
    this.allEl = { loaded, loadArea, svg };
  }

  changeProgress( percent ) {
    let loadCoeff = 359.9 / 100;
    this.progressEl.setAttribute( 'd', describeArc( 250, 250, 50, 0, percent * loadCoeff ) );
  }
}


function Progress ( UI ) {
  this.state = {
    'normal': true,
    'animated': false,
    'hidden': false
  };

  this.currentProgress = 0;

  this.ui = new UI();

  setInterval( () => this.ui.changeProgress( ++this.currentProgress ), 3000 );
}

let progress = new Progress( roundProgressUI );

console.dir( progress );