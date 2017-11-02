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
    this.listeners.push( listener );
  }

  removeListener( listener ) {
    listenerIndex = this.listeners.indexOf( listener );

    if ( listenerIndex >= 0 ) {
      this.listeners.splice( listenerIndex );
    }
  }

  notifyListeners( action ) {
    this.listeners.forEach( listener => listener.update( this.currentState, action ) );
  }

  get currentState() {
    return this.state;
  }

  setStateChanges( newState, action ) {
    this.state = Object.assign( {}, this.state, newState );
    this.notifyListeners( action );
  }
}