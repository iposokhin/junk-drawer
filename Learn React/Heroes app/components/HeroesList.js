import React from 'react';
import { PropTypes } from 'prop-types';

import { HeroItem } from './HeroItem';

export const HeroesList = ( { heroes } ) => {
  let el;

  if( !Object.values( heroes ).length ) {
    el = (
      <div>
        <h2> My heroes </h2>
        <div>
          Heroes not found. Add your hero to get started!
        </div>
      </div>
    )
  } else {
    el = (
      <div>
        <h2> My heroes </h2>     
        <ul>
          {
            Object.values( heroes ).map( ( hero ) => 
              <HeroItem
                key={ hero.id }
                { ...hero }
              />
            )
          }
        </ul>
      </div>
    )
  }

  return el;
}

HeroesList.propTypes = {
  heroes: PropTypes.objectOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  } ).isRequired ).isRequired
}