import { createStore } from 'redux';
import { heroes } from './reducers/reducers';

import { addHero, editHero, removeHero } from './actions/action-creators';

let store = createStore( heroes );

console.log( store.getState() );

let unsubscribe = store.subscribe( () => {
  console.log( store.getState() );
} );

store.dispatch( addHero( 'Batman' ) );
store.dispatch( addHero( 'Superman' ) );
store.dispatch( addHero( 'Shrek' ) );
store.dispatch( addHero( 'Morty' ) );
store.dispatch( addHero( 'Moana' ) );
store.dispatch( addHero( 'Spider-man' ) );

store.dispatch( editHero( 2, 'Rick Sanches' ) );
store.dispatch( editHero( 4, 'Captain America' ) );

store.dispatch( removeHero( 0 ) );
store.dispatch( removeHero( 5 ) );
store.dispatch( removeHero( 3 ) );

unsubscribe();