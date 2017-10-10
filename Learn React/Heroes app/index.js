import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import Heroes from './components/Heroes';
import EditHeroContainer from './containers/EditHeroContainer';

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
          <Route exact path="/" render={ () => (
            <Redirect to="/heroes" />
          ) } />
          <Route exact path="/heroes" component={ Heroes } />
          <Route exact path="/details/hero/:id" component={ EditHeroContainer } />
        </App>        
      </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);