import React from 'react';
import PokedexContainer from 'components/PokedexContainer';
import styled from 'styled-components';

const App = () => {
  const StyledApp = styled.div`
    text-align: center;
  `;
  return (
    <StyledApp>
      <PokedexContainer />
    </StyledApp>
  );
}

export default App;
