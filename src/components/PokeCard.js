import * as React from 'react';
import { Card, Col, Row } from 'antd';
import styled from 'styled-components';

const PokeCard = props => {
  console.log(props);

  const StyledCard = styled(Card)`
    margin: 30px;
    width: 200px;
    height: 200px;
  `;

  return (
    <Row>
      {props.entries.map(pokemon => (
        <Col span={8}>
          <StyledCard>
            <img src={pokemon.sprites.front_default}></img>
            <p>{pokemon.forms[0].name}</p>
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
};

export default PokeCard;
