import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Card, Col } from 'antd';
import styled from 'styled-components';
import { Context } from 'Context';

const PokeCard = props => {
  const StyledCard = styled(Card)`
    margin: 30px;
    width: 200px;
    height: 200px;
  `;

  // const { selectedPokemon, setSelectedPokemon } = useContext(Context);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const loadSelectedPokemon = async () => {
    const fetchPokemon = await fetch(props.url);
    const pokemonData = await fetchPokemon.json();
    setSelectedPokemon(pokemonData);
  };

  useEffect(() => {
    if (selectedPokemon === null) {
      loadSelectedPokemon();
    }
  }, [selectedPokemon]);

  return (
    <Col span={8}>
      <StyledCard>
        <img alt='' src={selectedPokemon?.sprites.front_default} />
        <p>{props.name}</p>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
