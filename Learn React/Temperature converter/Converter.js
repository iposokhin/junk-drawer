import React from 'react';
import { TemperatureInput } from './TemperatureInput';
import { BoilingVerdict } from './BoilingVerdict';

export class Converter extends React.Component {
  constructor( props ) {
    super( props );

    this.handeleCelsiusChange = this.handeleCelsiusChange.bind( this );
    this.handeleFahrenheitChange = this.handeleFahrenheitChange.bind( this );
    
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  render() {
    const temperature = this.state.temperature,
          scale = this.state.scale,
          celsius = scale === 'f' ?
            this.tryConvert( temperature, this.toCelsius ) :
            temperature,

          fahrenheit = scale === 'c' ?
            this.tryConvert( temperature, this.toFahrenheit ) :
            temperature;

    return ( 
      <div>
        <TemperatureInput
          onTemperatureChange={ this.handeleFahrenheitChange }
          scale='f'
          temperature={ fahrenheit }
        />

        <TemperatureInput
          onTemperatureChange={ this.handeleCelsiusChange }
          scale='c'
          temperature={ celsius }
        />

        <BoilingVerdict celsius={ parseFloat( celsius ) } />
      </div>
    );
  }

  handeleCelsiusChange( temperature ) {
    this.setState( {
      temperature,
      scale: 'c'
    } );
  }

  handeleFahrenheitChange( temperature ) {
    this.setState( {
      temperature,
      scale: 'f'
    } );    
  }

  toCelsius( fahrenheit ) {
    return ( fahrenheit - 32 ) * 5 / 9;
  }

  toFahrenheit( celsius ) {
    return ( celsius * 9 / 5 ) + 32;
  }

  tryConvert( temperature, convertFunc ) {
    const input = parseFloat( temperature );

    if ( Number.isNaN( input ) ) {
      return '';
    }

    const output = convertFunc( input ),
          rounded = Math.round( output * 1000 ) / 1000;

    return rounded.toString();
  }
}