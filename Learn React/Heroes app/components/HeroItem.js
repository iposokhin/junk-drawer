import React from 'react';
import { PropTypes } from 'prop-types';

export const HeroItem = ( { id, name } ) => {
  return (
    <li>
      <span>{ id }</span>
      <span>{ name }</span>
    </li>
  );
}

HeroItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}