import React from 'react';
import styled from 'styled-components';
import PokedexContainer from 'components/PokedexContainer';

const StyledApp = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <StyledApp>
      <PokedexContainer />
    </StyledApp>
  );
};

export default App;
