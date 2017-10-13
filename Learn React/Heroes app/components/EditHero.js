import React from 'react';

export const EditHero = ( { hero, onChangeHeroName, goBack } ) => {
  const onChange = ( e ) => {
    let value = e.target.value;
    onChangeHeroName( hero.id, value );
  }

  return (
    <div>
      <h2>{ hero.name } details!</h2>
      <form>
        <label htmlFor="heroId">id:</label>
        <input id="heroId" type="text" value={ hero.id } readOnly />
        <label htmlFor="heroName">name:</label>
        <input id="heroName" type="text" value={ hero.name } onChange={ onChange } /> 
      </form>
      <button onClick={ goBack }>
        Back
      </button>
    </div>
  )
};