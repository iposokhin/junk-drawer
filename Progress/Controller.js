class ProgressController {
  constructor( model ) {
    this.model = model;
    this.view = new ProgressView( document.getElementById( 'root' ), model, this );
    this.view.createView();
    this.view.createControls();
  }

  changeState( e ) {

    let el = e.srcElement || e.target;

    switch ( el.id ) {
      case 'valueInput' : {  
        this.model.setStateChanges( { 'progress': el.value > 100 ? 100 : el.value < 0 ? 0 : +el.value }, 'value' );
        break;       
      }

      case 'animateInput' : {
        this.model.setStateChanges ( { 'animate': el.checked }, 'animate' );
        break;
      }

      case 'hideInput' : {
        this.model.setStateChanges ( { 'hide': el.checked }, 'hide' );
        break;
      }

      default : {
        break;
      }
    }
  }
}