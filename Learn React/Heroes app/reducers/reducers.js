import { combineReducers } from 'redux';
import { ADD_HERO, EDIT_HERO, REMOVE_HERO, SELECT_HERO } from './../actions/actions';

const hero = ( state = {}, action ) => {
  switch ( action.type ) {
    case ADD_HERO :
    case EDIT_HERO :
      return {
        ...state,
        [ action.id ] : {
          id: action.id,
          name: action.name
        }
      }

    case REMOVE_HERO :
      let newState = Object.assign( {}, state );
      delete newState[ action.id ];
      return newState
    default :
      return state;
  }
}

const heroes = ( state = {}, action ) => {
  switch ( action.type ) {
    case ADD_HERO :
    case EDIT_HERO : 
    case REMOVE_HERO :
      return Object.assign( {}, state, hero( heroes, action ) );

    default : 
      return state;
  }
}

const selectedHero = ( state = null, action ) => {
  switch ( action.type ) {
    case SELECT_HERO : 
      return action.id;

    default :
      return state;
  }
}

export const heroesApp = combineReducers( {
  heroes,
  selectedHero
} );