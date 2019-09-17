import React, { useState } from "react";
import axios from "axios";

import logo from "../images/Pokemon_logo.png";
import { PokeNumForm, AppContainer, Logo, Text, Pokedex } from "../styled-components";

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
    <AppContainer>
      <Logo src={logo} alt="Logo Pokémon" />
      <PokeNumForm
        onSubmit={getPokemon}
        onValueChange={e => setNum(e.target.value)}
        inputValue={num}
        buttonText="FIND"
      />
      {pokemon ? <Pokedex data={pokemon} /> : <Text>{phrase}</Text>}
    </AppContainer>
  );
};

export default App;

// Gotta Catch 'Em All
