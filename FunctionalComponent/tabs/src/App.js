import Tabs from './components/Tabs'
import { useState } from 'react';
import Content from './components/Content';



function App() {
  const [currentContent, setcurrentContent] = useState("")  

  const tabs = [
    {label: 'tab1', content: 'this is tab 1', id:0},
    {label: 'tab2', content: 'this is tab 2', id:1},
    {label: 'tab3', content: 'this is tab 3', id:2},
  ]

  const changeCurrentContent = (content) => {
    setcurrentContent(content);
  }

  return (
    <div className="App">
      <Tabs tabs={tabs} changeCurrentContent={changeCurrentContent}/>
      <Content currentContent={currentContent}/>
    </div>
  );
}

export default App;
