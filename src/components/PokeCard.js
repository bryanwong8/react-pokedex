import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Space } from 'antd';
import styled from 'styled-components';
import { uppercaseWord } from 'helper/shared';
import {
  loadSelectedPokemon,
  getBackgroundType,
  getPokemonImage,
  getType
} from 'helper/pokemonHelpers';

const StyledButton = styled(Button)`
  background-color: ${props => props.typeName};
  color: white;
  border: none;
  width: 100%;
  margin-top: 7px;
`;

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
            {pokemonDetail?.types.map(typing => (
              <StyledButton
                typeName={getType(typing.type.name)}
                shape='round'
                size='small'
              >
                {uppercaseWord(typing.type.name)}
              </StyledButton>
            ))}
          </div>
          <StyledImage alt='' src={getPokemonImage(pokemonDetail?.id)} />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
