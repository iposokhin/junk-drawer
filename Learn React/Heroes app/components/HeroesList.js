import React from 'react';
import { PropTypes } from 'prop-types';

import { HeroItem } from './HeroItem';

export const HeroesList = ( { heroes, selectedHero, onHeroClick, onRemoveClick } ) => {

  return ( !Object.values( heroes ).length ) ? (
    <div>
      <h2> My heroes </h2>
      <div>
        Heroes not found. Add your hero to get started!
      </div>
    </div>
  ) :
  (
    <div>
      <h2> My heroes </h2>     
      <ul>
        {
          Object.values( heroes ).map( ( hero ) =>
            <HeroItem
              key={ hero.id }
              { ...hero }
              onHeroClick={ () => onHeroClick( hero.id ) }
              onRemoveClick={ () => hero.id === selectedHero ? onRemoveClick( hero.id, true ) : onRemoveClick( hero.id, false) }
            />
          )
        }
      </ul>
    </div>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.objectOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  } ).isRequired ).isRequired,
  onHeroClick: PropTypes.func.isRequired
}