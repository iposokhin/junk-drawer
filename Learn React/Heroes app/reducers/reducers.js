import { ADD_HERO, EDIT_HERO, REMOVE_HERO } from './../actions/actions';

function hero ( state = {}, action ) {
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
  }
}

export function heroes ( state = {}, action ) {
  switch ( action.type ) {
    case ADD_HERO :
    case EDIT_HERO : 
    case REMOVE_HERO :
      return {
        ...state,
        heroes: hero( state.heroes, action )     
      }

    default : 
      return state;
  }
}