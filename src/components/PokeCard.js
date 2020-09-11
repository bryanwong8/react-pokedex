import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Col } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 30px;
  width: 200px;
  height: 200px;
`;

const PokeCard = props => {
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const loadSelectedPokemon = async () => {
    const fetchPokemon = await fetch(props.url);
    const pokemonData = await fetchPokemon.json();
    setPokemonDetail(pokemonData);
  };

  useEffect(() => {
    if (pokemonDetail === null) {
      loadSelectedPokemon();
    }
  }, [pokemonDetail]);

  return (
    <Col span={8}>
      <StyledCard onClick={() => props.changeSelected(pokemonDetail)}>
        <img alt='' src={pokemonDetail?.sprites.front_default} />
        <p>{props.name}</p>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
