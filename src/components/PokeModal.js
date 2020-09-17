import * as React from 'react';
import { Layout, Modal } from 'antd';
import styled from 'styled-components';
import { uppercaseWord } from 'helper/shared';
import { getBackgroundType, getPokemonImage } from 'helper/pokemonHelpers';
import PokeStats from 'components/PokeStats';
import PokeTypes from 'components/PokeTypes';

const { Footer, Content } = Layout;

const StyledContent = styled(Content)`
  padding: 28px;
`;

const StyledFooter = styled(Footer)`
  border-radius: 30px 30px 0 0;
  background-color: white;
`;

const StyledImage = styled.img`
  width: 40%;
  margin-top: 2em;
`;

const StyledImageContainer = styled.div`
  text-align: center;
`;

const StyledModal = styled(Modal)`
  .ant-modal {
    width: 300px;
  }

  .ant-modal-body {
    padding: 0;
  }
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const PokeModal = props => {
  return (
    <StyledModal
      visible={props.pokemonDetail !== null}
      onOk={() => props.changeSelected(null)}
      onCancel={() => props.changeSelected(null)}
      footer={null}
    >
      <Layout
        style={{
          backgroundColor: getBackgroundType(
            props.pokemonDetail?.types[0].type.name
          )
        }}
      >
        <StyledContent>
          <StyledTitle>
            {uppercaseWord(props.pokemonDetail.name)} #{props.pokemonDetail.id}
          </StyledTitle>

          <span>
            <PokeTypes types={props.pokemonDetail.types} width={'18'} />
          </span>

          <StyledImageContainer>
            <StyledImage
              alt=''
              src={getPokemonImage(props.pokemonDetail?.id)}
            />
          </StyledImageContainer>
        </StyledContent>

        <StyledFooter>
          <PokeStats stats={props.pokemonDetail.stats} />
        </StyledFooter>
      </Layout>
    </StyledModal>
  );
};

export default PokeModal;
