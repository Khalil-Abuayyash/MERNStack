import Form from './components/Form';
import Divs from './components/Divs';
import React, {useState} from 'react';

function App() {

  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  }

  return (
    <div className="App">
      <Form addBox={addBox} />
      <Divs boxes={boxes}/>
    </div>
  );
}

export default App;
