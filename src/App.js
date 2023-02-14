import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import axios from 'axios'; //allows to fetch from APIs easier that using the deafult FETCH from bowser
import Pagination from './Pagination';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [previousPageURL, setPreviousPageURL] = useState()
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL, setNextPageURL] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel
    setLoading(true)
    //this is an effect, useEffect is being hooked up properly with axios
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c )
    }).then(res => {
      setLoading(false)
      setNextPageURL(res.data.next)
      setPreviousPageURL(res.data.previous)
      setPokemon(res.data.results.map(pok => pok.name))
  })
  return () => cancel() 
  }, [currentPageURL]) //every time URL chnages, rerun the URL

  if(loading) return "Loading..."

  function goToNextPage() { //pagination
    setCurrentPageURL(nextPageURL)
  }

  function goToPreviousPage() {
    setCurrentPageURL(previousPageURL)
  }

  return ( //we use <></> to return empty object 
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination goToNextPage={nextPageURL ? goToNextPage : null} 
                  goToPreviousPage={previousPageURL ? goToPreviousPage : null}/>
    </>
  );
}

export default App;
