class ControlsForm extends Form {
  constructor() {
    super( { 'class': 'progress__form form' } );

    let valueControl = new ValueControl();
    let animateControl = new AnimateControl();
    let hideControl = new HideControl();

    this.appendNode( valueControl, animateControl, hideControl );
  }
}