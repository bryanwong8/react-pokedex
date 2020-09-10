import * as React from 'react';
import { useEffect, useState } from 'react';
import PokeCard from 'components/PokeCard';
import styled from 'styled-components';

const PokdexContainer = () => {
  const StyledContainer = styled.div`
    margin: auto;
    width: 65%;
    padding: 10px;
  `;

  const [pokemonDetails, setDetails] = useState([]);

  const loadPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const fetchPokemon = await fetch(url);
    const pokemonData = await fetchPokemon.json();

    pokemonData.results.map(async pokemon => {
      const fetchPokemon = await fetch(pokemon.url);
      const detail = await fetchPokemon.json();
      let details = [];
      details.push(detail);
      setDetails(prevDetails => [...prevDetails, ...details]);
    });
  };

  useEffect(() => {
    if (pokemonDetails.length === 0) {
      loadPokemon();
    }
  }, [pokemonDetails]);

  return (
    <StyledContainer className='site-card-wrapper'>
      <PokeCard entries={pokemonDetails} />
    </StyledContainer>
  );
};

export default PokdexContainer;
