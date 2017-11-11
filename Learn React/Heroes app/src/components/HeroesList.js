import React from 'react';
import { PropTypes } from 'prop-types';

import { HeroItem } from './HeroItem';

export const HeroesList = ( { heroes, selectedHero, top, onHeroClick, onRemoveClick, onAddToTopClick, onRemoveFromTopClick } ) => {

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
          Object.values( heroes ).map( ( hero ) => {
            let heroInTop = top.indexOf( hero.id ) > -1 ? true : false;

            return (
            <HeroItem
              key={ hero.id }
              inTop={ heroInTop }
              topClick={ top.indexOf( hero.id ) > -1 ? 
                () => onRemoveFromTopClick( hero.id ) : 
                () => onAddToTopClick( hero.id ) }
              { ...hero }
              onHeroClick={ () => { onHeroClick( hero.id ) } }
              onRemoveClick={ () => {
                if ( hero.id === selectedHero ) onHeroClick( null );
                if ( heroInTop ) onRemoveFromTopClick( hero.id );
                onRemoveClick( hero.id )
              } }
            /> );
          } )
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