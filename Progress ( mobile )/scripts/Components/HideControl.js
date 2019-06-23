class HideControl extends Container {
  constructor() {
    super( { 'class': 'form__box box' } );

    let hideLabel = new Label( {
      'class': 'form__label label',
      'for': 'hideInput'
    } );

    hideLabel.createTextNode( 'Hide' );

    let hideInput = new Input( {
      'class': 'form__input input input_type_check',
      'id': 'hideInput',
      'type': 'checkbox'
    } );

    hideInput.update = function( { hide }, action ) {
      if ( action === 'hide' || action === 'init' ) {
        this.node.checked = hide;
      }
    }

    this.appendNode( hideInput, hideLabel );
  }
}