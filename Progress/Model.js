class ProgressModel {
  constructor() {
    this.state = {
      progress: 0,
      normal: true,
      animate: false,
      hide: false
    }

    this.listeners = [];
  }

  registerListener( listener ) {    
    listener.ownState = Object.assign( {}, listener.ownState, this.currentState );
    this.listeners.push( listener );
  }

  removeListener( listener ) {
    listenerIndex = this.listeners.indexOf( listener );

    if ( listenerIndex >= 0 ) {
      this.listeners.splice( listenerIndex );
    }
  }

  notifyListeners() {
    this.listeners.forEach( listener => listener.update( this.state ) );
  }

  get currentState() {
    return this.state;
  }

  set stateChanges( newState ) {
    this.state = Object.assign( this.state, newState );
    this.notifyListeners();
  }
}