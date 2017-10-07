import React from 'react';

import NavBar from './NavBar';

const App = ( { children }) => {
  return (
    <div>
      <h1> Tour of Heroes </h1>
      <NavBar />
      { children }
    </div>
  )
}

export default App;