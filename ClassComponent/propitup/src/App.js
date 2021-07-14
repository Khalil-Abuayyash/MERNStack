import logo from './logo.svg';
import './App.css';
import PersonCardComponent from './PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstName="Yousef" lastName="Nour" age={20} hairColor="brown"></PersonCardComponent>
      <PersonCardComponent firstName="Alaa" lastName="Ibrahim" age={22} hairColor="black"></PersonCardComponent>
      <PersonCardComponent firstName="Ahmad" lastName="Mahmmoud" age={24} hairColor="red"></PersonCardComponent>
      <PersonCardComponent firstName="Khalil" lastName="Abuayysh" age={26} hairColor="blonde"></PersonCardComponent>
    </div>
  );
}

export default App;
