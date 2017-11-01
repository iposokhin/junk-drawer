class ProgressView {
  constructor( targetNode = document.body ) {

    this.model = new ProgressModel();

    let canvas = new Canvas();
    let loadArea = new LoadArea();
    let loadLine = new LoadLine();

    canvas.appendNode( loadArea );
    canvas.appendNode( loadLine );

    targetNode.appendChild( canvas.node );

    this.model.registerListener( canvas );

    setInterval( () => {
      this.model.stateChanges = { progress: ++this.model.currentState.progress }
    }, 10000 );
  }
}

let progress = new ProgressView();

console.dir( progress );