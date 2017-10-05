import React from 'react';

export const MyHero = ( { hero } ) => {
  const el = ( hero !== null ) ?
              <span>{ `${ hero.name.toUpperCase() } is my hero!` }</span> :
              null;
  return el;
}