import React from 'react';
import { Link } from 'react-router-dom';

export const MyHero = ( { hero } ) => {
  const el = ( hero !== null ) ?
              <div>
                <div>{ `${ hero.name.toUpperCase() } is my hero!` }</div>
                <div>
                  <Link to={ `/details/hero/${ hero.id }` }>
                    View Details
                  </Link>
                </div>
              </div>:
              null;
  return el;
}