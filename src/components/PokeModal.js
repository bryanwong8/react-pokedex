import * as React from 'react';
import { Modal, Progress } from 'antd';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 50%;
`;

const PokeModal = props => {
  const pokemonImage =
    'https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/' +
    props.pokemonDetail.id +
    '.svg';
  return (
    <Modal
      title='Basic Modal'
      visible={props.pokemonDetail !== null}
      onOk={() => props.changeSelected(null)}
      onCancel={() => props.changeSelected(null)}
    >
      <h1>
        {props.pokemonDetail.name} #{props.pokemonDetail.id}
      </h1>
      <StyledImage alt='' src={pokemonImage} />
        {props.pokemonDetail.types.map(type => (
          <p>type.name</p>
        ))}
        {/* {props.pokemonDetail.types[0].type.name}{' '}
        {props.pokemonDetail.types[1].type.name} */}
      {props.pokemonDetail.stats.map(stat => (
        <Progress percent={stat.base_stat/255 * 100} showInfo={false} />
      ))}
    </Modal>
  );
};

export default PokeModal;
