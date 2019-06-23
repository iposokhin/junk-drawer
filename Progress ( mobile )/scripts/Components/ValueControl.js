class ValueControl extends Container {
  constructor() {
    super( { 'class': 'form__box box' } );

    let valueLabel = new Label( {
      'class': 'form__label label',
      'for': 'valueInput'
    } );

    valueLabel.createTextNode( 'Value' );

    let valueInput = new Input( {
      'class': 'form__input input',
      'id': 'valueInput',
      'type': 'number',
      'max': 100,
      'min': 0
    } );

    valueInput.update = function( { progress }, action ) {
      if ( action === 'value' || action === 'init' ) {
        this.node.value = progress;
      }
    }

    this.appendNode( valueInput, valueLabel );
  }
}