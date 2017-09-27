import React from 'react';
import { PropTypes } from 'prop-types';

import { HeroItem } from './HeroItem';

export const HeroesList = ( { heroes } ) => {
  return (
    <ul>
      {
        (() => {
          let items = [];
          for( let key in heroes ) {
            items.push(
              <HeroItem
                key={ key.toString() }
                { ...heroes[ key ] }
              /> 
            );
          }
          return items;
        })()
      }
    </ul>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.objectOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  } ).isRequired ).isRequired
}