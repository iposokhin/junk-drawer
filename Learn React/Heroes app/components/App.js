import React from 'react';
import HeroesListContainer from '../containers/HeroesListContainer';
import AddHero from '../containers/AddHero';

const App = () => {
  return (
    <div>
      <AddHero />
      <HeroesListContainer />
    </div>
  )
}

export default App;