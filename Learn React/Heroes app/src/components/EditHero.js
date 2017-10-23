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
        <div className="form__section">
          <label htmlFor="heroId">id:</label>
          <input className="form__input input" id="heroId" type="text" value={ hero.id } readOnly />
          <FontAwesome className="input__icon" name="lock" />
        </div>
        <div className="form__section">
          <label htmlFor="heroName">name:</label>
          <input className="form__input input" id="heroName" type="text" value={ hero.name } onChange={ onChange } />
        </div>
      </form>
      <button className="form_button button" onClick={ goBack }>
        <FontAwesome name="reply" />
        <span> Back</span>
      </button>
    </section>
  )
};