class AnimateControl extends Container {
  constructor() {
    super( { 'class': 'form__box box' } );

    let animateLabel = new Label( {
      'class': 'form__label label',
      'for': 'animateInput'
    } );

    animateLabel.createTextNode( 'Animate' );

    let animateInput = new Input( {
      'class': 'form__input input input_type_check',
      'id': 'animateInput',
      'type': 'checkbox'
    } );

    animateInput.update = function( { animate }, action ) {
      if ( action === 'animate' || action === 'init' ) {
        this.node.checked = animate;
      }
    }

    this.appendNode( animateInput, animateLabel );
  }
}