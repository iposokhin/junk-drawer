import React from 'react';
import { PropTypes } from 'prop-types';

import { HeroItem } from './HeroItem';

export const HeroesList = ( { heroes, selectedHero, onHeroClick, onRemoveClick } ) => {

  return ( !Object.values( heroes ).length ) ? (
    <section className="section">
      <h2 className="header header_h2"> My heroes </h2>
      <div>
        Heroes not found. Add your hero to get started!
      </div>
    </section>
  ) :
  (
    <section className="section">
      <h2 className="header header_h2"> My heroes </h2>     
      <ul className="list">
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
    </section>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.objectOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  } ).isRequired ).isRequired,
  onHeroClick: PropTypes.func.isRequired
}