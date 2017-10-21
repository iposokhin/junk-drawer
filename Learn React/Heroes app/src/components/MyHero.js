import React from 'react';
import { Link } from 'react-router-dom';

export const MyHero = ( { hero } ) => {
  const el = ( hero !== null ) ?
              <section className="section">
                <div>{ `${ hero.name.toUpperCase() } is my hero!` }</div>
                <div>
                  <Link className="link" to={ `/details/hero/${ hero.name.toLowerCase() }` }>
                    View Details
                  </Link>
                </div>
              </section>:
              null;
  return el;
}