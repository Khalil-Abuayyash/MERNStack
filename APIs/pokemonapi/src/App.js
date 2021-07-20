import React, {useState, useEffect} from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
          return response.json();
    }).then(response => {
        setPokemons(response.results);
        console.log(response.results[0].name);
      }).catch(err=>{
        console.log(err);
      });
  }
  return (
    <div className="App">
      <button onClick={fetchPokemons}>Fetch Pokemons</button>
      <ol>
        {
          pokemons.map(
            (pokemon, index) => {
              return <li key={index}> {pokemon.name}</li>
            }
          )
        }
      </ol>
    </div>
  );
}

export default App;
