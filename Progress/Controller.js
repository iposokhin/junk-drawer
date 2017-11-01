class ProgressController {
  constructor( model ) {
    this.model = model;
    this.view = new ProgressView( document.getElementById( 'root' ), model, this );
    this.view.createView();
    this.view.createControls();
  }

  changeState( e ) {

    let el = e.srcElement;

    switch ( el.id ) {
      case 'valueInput' : {  
        this.model.stateChanges = { 'progress': el.value > 100 ? 100 : el.value < 0 ? 0 : +el.value };
        break;       
      }

      case 'animateInput' : {
        this.model.stateChanges = { 'animate': !this.model.currentState.animate };
        break;
      }

      case 'hideInput' : {
        this.model.stateChanges = { 'hide': !this.model.currentState.hide };
        break;
      }

      default : {
        break;
      }
    }
  }
}