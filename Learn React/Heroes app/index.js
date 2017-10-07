import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import Heroes from './components/Heroes';

import { createStore } from 'redux';
import { heroesApp } from './reducers/reducers';

let store = createStore( heroesApp );

store.subscribe( () => {
  console.log( store.getState() );
} );

render (
    <Provider store={ store }>
      <BrowserRouter>
        <App>
          <Route exact path="/">
            <Redirect to="/heroes" />
          </Route>
          <Route exact path="/heroes" component={ Heroes } />
        </App>        
      </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);