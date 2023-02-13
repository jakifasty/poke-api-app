import React, { useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import axios from 'axios'; //for 

function App() {

  const [pokemon, setPokemon] = useState(["charmander", "bulbasur"])

  axios.get()

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
