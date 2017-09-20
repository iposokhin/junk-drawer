import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action_const';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter ( state = SHOW_ALL, action ) {
  switch ( action.type ) {
    case SET_VISIBILITY_FILTER : 
      return action.filter;

    default :
      return state;
  }
}

function todo ( state, action ) {
  switch ( action.type ) {
    case 'ADD_TODO' :
      return {
        text: action.text,
        id: action.id,
        completed: false
      }
    case 'TOGGLE_TODO' :
      if ( state.id === action.id ) {
        return Object.assign( {}, state, {
          completed: !state.completed
        } );
      }
      return state;
    default :
      return state;
  }
}

function todos ( state = [], action ) {
  switch ( action.type ) {
    case ADD_TODO : 
      return [
        ...state,
        todo( undefined, action )
      ]

    case TOGGLE_TODO :
      return state.map( t => todo( t, action ) );

    default : 
      return state;
  }
}

const todoApp = combineReducers( {
  visibilityFilter,
  todos
} );

export default todoApp;