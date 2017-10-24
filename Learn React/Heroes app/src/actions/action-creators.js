import { ADD_HERO, EDIT_HERO, REMOVE_HERO, SELECT_HERO, ADD_TO_TOP, REMOVE_FROM_TOP } from './actions';

let freeId = 0;

export const addHero = ( name ) => {
  return {
    type: ADD_HERO,
    id: freeId++,
    name: name
  }
}

export const editHero = ( id, name ) => {
  return {
    type: EDIT_HERO,
    id: id,
    name: name
  }
}

export const removeHero = ( id ) => {
  return {
    type: REMOVE_HERO,
    id: id
  }
}

export const selectHero = ( id ) => {
  return {
    type: SELECT_HERO,
    id: id
  }
}

export const addToTop =( id ) => {
  return {
    type: ADD_TO_TOP,
    id: id
  }
}

export const removeFromTop = ( id ) => {
  return {
    type: REMOVE_FROM_TOP,
    id: id
  }
}