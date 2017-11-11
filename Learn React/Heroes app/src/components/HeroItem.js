import React from 'react';
import { PropTypes } from 'prop-types';
import FontAwesom from 'react-fontawesome';

export const HeroItem = ( { id, name, inTop, onHeroClick, onRemoveClick, topClick } ) => {
  let topIcon = inTop ? 'star' : 'star-o',
      topColor = inTop ? 'yellow' : 'black';

  return (
    <li className="list__hero hero">
      <span className="hero__info info" onClick={ onHeroClick }>
        <span className="hero__id">{ id }</span>
        <span className="hero__name">{ name }</span>
      </span>
      <div className="hero__operations">
        <button className="hero__top button button_no-background" onClick={ topClick }>
          <FontAwesom className={ `hero__icon icon ${ topColor }` } name={ topIcon } />
        </button>
        <button className="hero__remove button button_no-background" onClick={ onRemoveClick }>
          <FontAwesom className="hero__icon icon"name="times" />
        </button>
      </div>
    </li>
  );
}

HeroItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onHeroClick: PropTypes.func.isRequired
}