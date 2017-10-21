import React from 'react';
import { connect } from 'react-redux';
import { addHero } from '../actions/action-creators';
import FontAwesome from 'react-fontawesome';

let AddHero = ( { dispatch } ) => {
  let input;

  return (
    <section className="section">
      <h2 className="header header_h2"> Add hero </h2>
      <form
        className="form"
        onSubmit={
          ( e ) => {
            e.preventDefault();
            if ( !input.value.trim() ) {
              return;
            }
            dispatch( addHero( input.value ) );
            input.value = '';
          }
        }
      >
        <input
          className="form__input input"
          type='text'
          ref={ ( node ) => {
            input = node;
          } }
        />
        <button
          type='submit'
          className="form__button button"
        >
          <span>Add </span>
          <FontAwesome name="user-plus" />
        </button>
      </form>
    </section>
  );
}

AddHero = connect()( AddHero );
export default AddHero;