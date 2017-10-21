import React from 'react';

import HeroesListContainer from '../containers/HeroesListContainer';
import AddHero from '../containers/AddHero';
import MyHeroContainer from '../containers/MyHeroContainer';

const Heroes = () => {
  return (
    <div>
      <AddHero />
      <HeroesListContainer />
      <MyHeroContainer />
    </div>
  )
}

export default Heroes;