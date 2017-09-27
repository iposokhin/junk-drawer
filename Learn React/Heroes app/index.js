import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { createStore } from 'redux';
import { heroes } from './reducers/reducers';

import { addHero, editHero, removeHero } from './actions/action-creators';

let store = createStore( heroes );

store.dispatch( addHero( 'Batman' ) );
store.dispatch( addHero( 'Spider-man' ) );
store.dispatch( addHero( 'Morty' ) );

store.dispatch( editHero( 2, 'Rick Sanches' ) );

render (
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById( 'root' )
);

