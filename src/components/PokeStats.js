import * as React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';
import { calculateStatTotal, uppercaseWord } from 'helper/shared';

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

const PokeStats = props => {
  return (
    <div>
      {props.stats.map(stat => (
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
        <StyledStat>{calculateStatTotal(props?.stats)}</StyledStat>
        <StyledProgress
          percent={(calculateStatTotal(props?.stats) / 800) * 100}
          showInfo={false}
        />
        <br />
      </span>
    </div>
  );
};

export default PokeStats;
