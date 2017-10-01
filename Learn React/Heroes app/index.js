import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { createStore } from 'redux';
import { heroesApp } from './reducers/reducers';

import { addHero, editHero, removeHero } from './actions/action-creators';

let store = createStore( heroesApp );

let unsunscribe = store.subscribe( () => {
  console.log( store.getState() );
} );

render (
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById( 'root' )
);

