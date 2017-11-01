class roundProgressUI {
  constructor( targetNode = document.body ) {

    this.state = {
      progress: 0
    }

    let canvas = new Canvas();
    let loadArea = new LoadArea();
    let loadLine = new LoadLine();

    canvas.appendNode( loadArea );
    canvas.appendNode( loadLine );

    targetNode.appendChild( canvas.node );

    setInterval( () => {
      ++this.state.progress
      canvas.update( this.state );
    }, 5000 );
  }
}

let progress = new roundProgressUI;

console.dir( progress );