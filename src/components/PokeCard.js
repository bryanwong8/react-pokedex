import * as React from 'react';
import { useEffect, useState } from 'react';
import { Card, Col, Space } from 'antd';
import styled from 'styled-components';
import { uppercaseWord } from 'helper/shared';
import {
  loadSelectedPokemon,
  getBackgroundType,
  getPokemonImage
} from 'helper/pokemonHelpers';
import PokeTypes from 'components/PokeTypes';

const StyledCard = styled(Card)`
  background-color: ${props => props.typeName};
  margin: 30px;
  height: 180px;
  border-radius: 27px;
  color: white;

  :hover {
    cursor: pointer;
    float: top;
  }

  .ant-card-body {
    padding: 20px;
  }
`;

const StyledImage = styled.img`
  width: 80%;
  height: 100%;
`;

const StyledTitle = styled.h2`
  color: white;
`;

const PokeCard = props => {
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const selectedPokemon = async () => {
      try {
        const apiResponse = await loadSelectedPokemon(props.url);
        setPokemonDetail(apiResponse);
      } catch (err) {
        console.error(err);
      }
    };

    selectedPokemon();
  }, [props.url]);

  return (
    <Col span={8}>
      <StyledCard
        typeName={getBackgroundType(pokemonDetail?.types[0].type.name)}
        onClick={() => props.changeSelected(pokemonDetail)}
      >
        <Space align='start'>
          <div>
            <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
            <PokeTypes types={pokemonDetail?.types} width='100' />
          </div>
          <StyledImage alt='' src={getPokemonImage(pokemonDetail?.id)} />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
