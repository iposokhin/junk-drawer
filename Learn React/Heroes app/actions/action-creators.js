import { ADD_HERO, EDIT_HERO, REMOVE_HERO } from './actions';

let freeId = 0;

export function addHero ( name ) {
  return {
    type: ADD_HERO,
    id: freeId++,
    name: name
  }
}

export function editHero ( id, name ) {
  return {
    type: EDIT_HERO,
    id: id,
    name: name
  }
}

export function removeHero ( id ) {
  return {
    type: REMOVE_HERO,
    id: id
  }
}