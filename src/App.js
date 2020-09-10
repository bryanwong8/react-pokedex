import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Context } from 'Context';
import PokedexContainer from 'components/PokedexContainer';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const StyledApp = styled.div`
    text-align: center;
  `;
  return (
    <StyledApp>
      <Context.Provider value={{ selectedPokemon, setSelectedPokemon }}>
        <PokedexContainer />
      </Context.Provider>
    </StyledApp>
  );
};

export default App;
