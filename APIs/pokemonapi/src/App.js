import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsAxios, setPokemonsAxios] = useState([]);
  
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

  const fetchPokemonsAxios = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => setPokemonsAxios(response.data.results))
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
      <button onClick={fetchPokemonsAxios}>Fetch Pokemons using Axios</button>
      <ol>
        {
          pokemonsAxios.map(
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
