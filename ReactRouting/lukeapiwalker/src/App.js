import Search from './components/Search';
import {Router} from '@reach/router';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        <Show path="/:resource/:id" />
      </Router>
    </div>
  );
}

export default App;
