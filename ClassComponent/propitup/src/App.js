import logo from './logo.svg';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';
import PersonCardFunctionalComponent from './components/PersonCardFunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>Class Components</h1>
      <PersonCardComponent firstName="Yousef" lastName="Nour" age={20} hairColor="brown"></PersonCardComponent>
      <PersonCardComponent firstName="Alaa" lastName="Ibrahim" age={22} hairColor="black"></PersonCardComponent>
      <PersonCardComponent firstName="Ahmad" lastName="Mahmmoud" age={24} hairColor="red"></PersonCardComponent>
      <PersonCardComponent firstName="Khalil" lastName="Abuayysh" age={26} hairColor="blonde"></PersonCardComponent>
      <hr/>
      <h1>Functional Components</h1>
      <PersonCardFunctionalComponent firstName="Khalil" lastName="Abuayysh" age={26} hairColor="blonde"></PersonCardFunctionalComponent>
      <PersonCardFunctionalComponent firstName="Alaa" lastName="Ibrahim" age={22} hairColor="black"></PersonCardFunctionalComponent>
      <PersonCardFunctionalComponent firstName="Ahmad" lastName="Mahmmoud" age={24} hairColor="red"></PersonCardFunctionalComponent>
      <PersonCardFunctionalComponent firstName="Khalil" lastName="Abuayysh" age={26} hairColor="blonde"></PersonCardFunctionalComponent>
    </div>
  );
}

export default App;
