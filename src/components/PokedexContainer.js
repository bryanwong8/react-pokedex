import * as React from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'antd';
import PokeCard from 'components/PokeCard';
import styled from 'styled-components';
import { Context } from 'Context';

const PokdexContainer = () => {
  // const { selectedPokemon, setSelectedPokemon } = useContext(Context);
  const StyledContainer = styled.div`
    margin: auto;
    width: 65%;
    padding: 10px;
  `;

  const [pokemonDetails, setDetails] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const loadPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const fetchPokemon = await fetch(url);
    const pokemonData = await fetchPokemon.json();
    setPokemonData(pokemonData.results);
  };

  useEffect(() => {
    if (pokemonDetails.length === 0) {
      loadPokemon();
    }
  }, [pokemonDetails]);

  return (
    <StyledContainer className='site-card-wrapper'>
      <Row>
        {pokemonData?.map(pokemon => (
          <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </Row>
    </StyledContainer>
  );
};

export default PokdexContainer;
