import * as React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import PokeCard from 'components/PokeCard';
import PokeModal from 'components/PokeModal';

const StyledContainer = styled.div`
  margin: auto;
  width: 65%;
  padding: 10px;
`;

const PokdexContainer = React.memo(() => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);

  const loadPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const fetchPokemon = await fetch(url);
    const pokemonData = await fetchPokemon.json();
    setPokemonData(pokemonData.results);
  };

  useEffect(() => {
    if (pokemonData.length === 0) {
      loadPokemon();
    }
  }, [pokemonData]);

  return (
    <StyledContainer className='site-card-wrapper'>
      {selectedPokemon !== null ? (
        <PokeModal
          pokemonDetail={selectedPokemon}
          changeSelected={setSelectedPokemon}
        />
      ) : null}
      <Row>
        {pokemonData?.map(pokemon => (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            changeSelected={setSelectedPokemon}
          />
        ))}
      </Row>
    </StyledContainer>
  );
});

export default PokdexContainer;
