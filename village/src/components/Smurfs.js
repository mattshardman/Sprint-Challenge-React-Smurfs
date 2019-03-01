import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfsPage = styled.div`
  box-sizing: border-box;
  padding: 80px 20% 0 20%;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SmurfWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

function Smurfs ({ smurfs, deleteSmurf }) {
    return (
      <SmurfsPage>
        <h2 style={{ color: "#484848" }}>Smurf in the village</h2>
        <SmurfWrapper>
          {smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                deleteSmurf={deleteSmurf}
                {...smurf}
              />
            );
          })}
        </SmurfWrapper>
      </SmurfsPage>
    );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
