import React from 'react';
import ReactDOM from 'react-dom';

// Component class

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.name}!
      </h1>
    );
  }
}

// Functional component ( render only )

const HelloWorld = ( props ) => {
  return (
    <h1>
      Hello {props.name}!
    </h1>
  );
}

ReactDOM.render(<HelloWorld name="world" />, document.getElementById('root'));
