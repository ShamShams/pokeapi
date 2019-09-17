import React, { useState } from "react";
import axios from "axios";

import "../stylesheets/App.css";
import logo from "../images/Pokemon_logo.png";
import Pokedex from "./Pokedex";

const App = () => {
  const [num, setNum] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [phrase, setPhrase] = useState("Tape a Pokemon number...");

  const getPokemon = async e => {
    e.preventDefault();
    const pokemonNumber = num.trim();
    if (!pokemonNumber) return;
    try {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
      setPokemon(result.data);
    } catch (error) {
      setPokemon(null);
      setPhrase("No pokemon found :(");
    }
    setNum("");
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo Pokémon" />
      <form className="Input" onSubmit={getPokemon}>
        <input type="text" onChange={e => setNum(e.target.value)} value={num} />
        <button type="submit">FIND</button>
      </form>
      {pokemon ? <Pokedex data={pokemon} /> : <p className="Text">{phrase}</p>}
    </div>
  );
};

export default App;
