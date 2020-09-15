import * as React from 'react';
import { Button, Layout, Modal, Progress } from 'antd';
import styled from 'styled-components';
import getBackgroundType from 'getBackgroundType';
import getType from 'getType';

const { Footer, Content } = Layout;

const StyledButton = styled(Button)`
  color: white;
  border: none;
  width: 18%;
  margin-right: 5px;
`;

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

const StyledProgress = styled(Progress)`
  margin-left: 5px;
  width: 50%;
  position: absolute;
  right: 35px;
`;

const StyledStat = styled.span`
  position: absolute;
  left: 13em;
`;

const StyledStatName = styled.span`
  color: #8c8c8c;
`;

const StyledTitle = styled.h1`
  color: white;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const uppercaseWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const PokeModal = props => {
  const pokemonImage =
    'https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/' +
    props.pokemonDetail.id +
    '.svg';

  const calculateStatTotal = stats => {
    let total = 0;

    stats.map(stat => {
      total += stat.base_stat;
    });

    return total;
  };

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
            {props.pokemonDetail.types.map(typing => (
              <StyledButton
                style={{ backgroundColor: getType(typing.type.name) }}
                shape='round'
                size='small'
              >
                {uppercaseWord(typing.type.name)}
              </StyledButton>
            ))}
          </span>

          <StyledImageContainer>
            <StyledImage alt='' src={pokemonImage} />
          </StyledImageContainer>
        </StyledContent>

        <StyledFooter>
          {props.pokemonDetail.stats.map(stat => (
            <span>
              <StyledStatName>{uppercaseWord(stat.stat.name)}</StyledStatName>
              <StyledStat>{stat.base_stat}</StyledStat>
              <StyledProgress
                percent={(stat.base_stat / 255) * 100}
                showInfo={false}
              />
              <br />
            </span>
          ))}

          <span>
            <StyledStatName>Total</StyledStatName>
            <StyledStat>{calculateStatTotal(props.pokemonDetail.stats)}</StyledStat>
            <StyledProgress
              percent={(calculateStatTotal(props.pokemonDetail.stats) / 800) * 100}
              showInfo={false}
            />
            <br />
          </span>
        </StyledFooter>
      </Layout>
    </StyledModal>
  );
};

export default PokeModal;
