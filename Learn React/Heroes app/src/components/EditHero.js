import React from 'react';
import FontAwesome from 'react-fontawesome';

export const EditHero = ( { hero, onChangeHeroName, goBack } ) => {
  const onChange = ( e ) => {
    let value = e.target.value;
    onChangeHeroName( hero.id, value );
  }

  return (
    <section className="section">
      <h2 className="header header_h2">{ hero.name } details!</h2>
      <form>
        <label htmlFor="heroId">id:</label>
        <input id="heroId" type="text" value={ hero.id } readOnly />
        <label htmlFor="heroName">name:</label>
        <input id="heroName" type="text" value={ hero.name } onChange={ onChange } /> 
      </form>
      <button onClick={ goBack }>
        <FontAwesome name="reply" />
        <span> Back</span>
      </button>
    </section>
  )
};