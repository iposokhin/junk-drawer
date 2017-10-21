import React from 'react';
import { PropTypes } from 'prop-types';
import FontAwesom from 'react-fontawesome';

export const HeroItem = ( { id, name, onHeroClick, onRemoveClick } ) => {
  return (
    <li>
      <span onClick={ onHeroClick }>
        <span>{ id }</span>
        <span>{ name }</span>
      </span>
      <button onClick={ onRemoveClick }>
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