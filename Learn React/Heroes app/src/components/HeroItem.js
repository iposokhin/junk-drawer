import React from 'react';
import { PropTypes } from 'prop-types';
import FontAwesom from 'react-fontawesome';

export const HeroItem = ( { id, name, onHeroClick, onRemoveClick } ) => {
  return (
    <li className="list__hero hero">
      <span className="hero__info info" onClick={ onHeroClick }>
        <span className="hero__id">{ id }</span>
        <span className="hero__name">{ name }</span>
      </span>
      <button className="hero__remove button button_no-background" onClick={ onRemoveClick }>
        <FontAwesom name="times" />
      </button>
    </li>
  );
}

HeroItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onHeroClick: PropTypes.func.isRequired
}