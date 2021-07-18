import Form from './components/Form';
import Divs from './components/Divs';
import React, {useState} from 'react';

function App() {

  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors([...colors, color]);
  }

  return (
    <div className="App">
      <Form addColor={addColor} />
      <Divs colors={colors}/>
    </div>
  );
}

export default App;
