import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';
import Var from './components/Var';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Var path="/:variable" />
        <Var path="/:variable/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
