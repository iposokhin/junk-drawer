import React from 'react';

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

export class TemperatureInput extends React.Component {
  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( e ) {
    this.props.onTemperatureChange( e.target.value )
  }

  render() {
    const temperature = this.props.temperature,
          scale = this.props.scale;

    return (
      <fieldset>
        <legend> Enter temperature in { scaleName[ scale ] } </legend>
        <input
          value={ temperature }
          onChange={ this.handleChange }
        />
      </fieldset>
    );
  }  
}