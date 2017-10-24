import { combineReducers } from 'redux';
import { ADD_HERO, EDIT_HERO, REMOVE_HERO, SELECT_HERO, ADD_TO_TOP, REMOVE_FROM_TOP } from './../actions/actions';

const heroes = ( state = {}, action ) => {
  switch ( action.type ) {
    case ADD_HERO :
    case EDIT_HERO : 
      return Object.assign( {}, {
        ...state,
        [ action.id ] : {
          id: action.id,
          name: action.name
        }
      } );

    case REMOVE_HERO :
      let newState = Object.assign( {}, state );
      delete newState[ action.id ];
      return newState

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

const top = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_TO_TOP :
      if ( state.indexOf( action.id ) > -1 ) {
        return state;
      }
      return Array.of( ...state, action.id );

    case REMOVE_FROM_TOP :
      return state.filter( ( el ) => el !== action.id );

    default :
      return state;
  }
}

export const heroesApp = combineReducers( {
  heroes,
  selectedHero,
  top
} );