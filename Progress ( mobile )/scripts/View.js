class ProgressView {
  constructor( targetNode = document.body, model, controller ) {

    this.model = model;
    this.controller = controller;
    this.targetNode = targetNode;
    
    this.eventHappened = this.eventHappened.bind( this );

    this.targetNode.addEventListener( 'change', this.eventHappened );
    this.targetNode.addEventListener( 'input', this.eventHappened )
  }

  createView() {
    let canvas = new Canvas();    
    let loadArea = new LoadArea();
    let loadLine = new LoadLine();

    canvas.appendNode( loadArea, loadLine );

    this.targetNode.appendChild( canvas.node );
    this.model.registerListener( canvas );
  }

  createControls() {
    let controlsForm = new ControlsForm( {
      'class': 'progress__form form'
    } );

    this.targetNode.appendChild( controlsForm.node );
    this.model.registerListener( controlsForm );
  }

  eventHappened( e ) {
    this.controller.handleEvent( e );
  }
}