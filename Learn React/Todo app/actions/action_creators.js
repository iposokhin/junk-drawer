import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './action_const';

// action creators

let nextTodo = 0;

export function addTodo( text ) {
  return {
    type: ADD_TODO,
    id: nextTodo++,
    text
  }
}

export function toggleTodo( id ) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilters( filter ) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}