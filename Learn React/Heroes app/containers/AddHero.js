import React from 'react';
import { connect } from 'react-redux';
import { addHero } from '../actions/action-creators';
import FontAwesome from 'react-fontawesome';

let AddHero = ( { dispatch } ) => {
  let input;

  return (
    <div>
      <h2> Add hero </h2>
      <form
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
          type='text'
          ref={ ( node ) => {
            input = node;
          } }
        />
        <button
          type='submit'
        >
          <span>Add </span>
          <FontAwesome name="user-plus" />
        </button>
      </form>
    </div>
  );
}

AddHero = connect()( AddHero );
export default AddHero;