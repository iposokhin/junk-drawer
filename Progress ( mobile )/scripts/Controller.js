class ProgressController {
  constructor( model ) {
    this.model = model;
    this.view = new ProgressView( document.getElementById( 'root' ), model, this );
    this.view.createView();
    this.view.createControls();
  }

  handleEvent( e ) {

    let el = e.srcElement || e.target;

    if ( el.id === 'valueInput' && e.type === 'input' ) {
      this.model.setStateChanges( { 'progress': el.value > 100 ? 100 : el.value < 0 ? 0 : +el.value }, 'value' );
    } else if (  el.id === 'animateInput' ) {
      this.model.setStateChanges ( { 'animate': el.checked }, 'animate' );
    } else if ( el.id === 'hideInput' ) {
      this.model.setStateChanges ( { 'hide': el.checked }, 'hide' );
    }
  }
}