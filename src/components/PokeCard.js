import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Space } from 'antd';
import styled from 'styled-components';
import getTypeColor from 'getType';

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 7px;
`;

const StyledCard = styled(Card)`
  margin: 30px;
  height: 180px;
  border-radius: 27px;

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

const uppercaseWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PokeCard = props => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const pokemonImage =
    'https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/' +
    pokemonDetail?.id +
    '.svg';

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
      <StyledCard
        style={{
          backgroundColor: getTypeColor(pokemonDetail?.types[0].type.name)
        }}
        onClick={() => props.changeSelected(pokemonDetail)}
      >
        <Space align='start'>
          <div>
            <StyledTitle>{uppercaseWord(props.name)}</StyledTitle>
            {pokemonDetail?.types.map(typing => (
              <StyledButton type='primary' shape='round' size='small'>
                {uppercaseWord(typing.type.name)}
              </StyledButton>
            ))}
          </div>
          <StyledImage alt='' src={pokemonImage} />
        </Space>
      </StyledCard>
    </Col>
  );
};

export default PokeCard;
