class ProgressView {
  constructor( targetNode = document.body, model, controller ) {

    this.model = model;
    this.controller = controller;
    this.targetNode = targetNode;
    
    this.eventHappened = this.eventHappened.bind( this );

    this.targetNode.addEventListener( 'input', this.eventHappened );
    this.targetNode.addEventListener( 'change', this.eventHappened )
  }

  createView() {
    let canvas = new Canvas();

    this.model.registerListener( canvas );
    
    let loadArea = new LoadArea();
    let loadLine = new LoadLine();

    this.model.registerListener( loadLine );

    canvas.appendNode( loadArea );
    canvas.appendNode( loadLine );

    this.targetNode.appendChild( canvas.node );
  }

  createControls() {
    let form = new Form( {
      'class': 'progress-form form'
    } );

    let valueContainer = new Container( {
      'class': 'progress-form__box box'
    } );

    let valueLabel = new Label( {
      'class': 'progress-form__label label',
      'for': 'valueInput'
    } );

    valueLabel.createTextNode( 'Value' );

    let valueInput = new Input( {
      'class': 'progress-form__input input',
      'id': 'valueInput',
      'type': 'number',
      'max': 100,
      'min': 0
    } );

    valueContainer.appendNode( valueInput );
    valueContainer.appendNode( valueLabel );


    let animateContainer = new Container( {
      'class': 'progress-form__box box'
    } );

    let animateLabel = new Label( {
      'class': 'progress-form__label label',
      'for': 'animateInput'
    } );

    animateLabel.createTextNode( 'Animate' );

    let animateInput = new Input( {
      'class': 'progress-form__input input',
      'id': 'animateInput',
      'type': 'checkbox'
    } );

    animateContainer.appendNode( animateInput );
    animateContainer.appendNode( animateLabel );


    let hideContainer = new Container( {
      'class': 'progress-form__box box'
    } );

    let hideLabel = new Label( {
      'class': 'progress-form__label label',
      'for': 'hideInput'
    } );

    hideLabel.createTextNode( 'Hide' );

    let hideInput = new Input( {
      'class': 'progress-form__input input',
      'id': 'hideInput',
      'type': 'checkbox'
    } );

    hideContainer.appendNode( hideInput );
    hideContainer.appendNode( hideLabel );

    form.appendNode( valueContainer );
    form.appendNode( animateContainer );
    form.appendNode( hideContainer );

    this.targetNode.appendChild( form.node );
  }

  eventHappened( e ) {
    this.controller.changeState( e );
  }
}