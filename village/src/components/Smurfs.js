import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfsPage = styled.div`
  box-sizing: border-box;
  padding: 80px 10% 0 10%;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SmurfWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const BtnWrapper = styled.div`
  display: flex;
`;

const Btn = styled.button`
  margin: 10px;
  width: 150px;
  border: none;
  height: 30px;
  background: ${({danger}) => danger ? 'orange' : 'skyblue'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  cursor : pointer;
  outline: none;
`;

function Smurfs ({ smurfs, deleteMode, editMode, setEditMode, setDeleteMode, deleteSmurf, editSmurf }) {
    return (
      <SmurfsPage>
        <h2 style={{ color: "skyblue" }}>Smurf in the village</h2>
        <BtnWrapper>
          <Btn danger disable={editMode} onClick={() => setDeleteMode(!deleteMode)}>Delete smurfs</Btn>
          <Btn disable={deleteMode} onClick={() => setEditMode(!editMode)}>Edit smurfs</Btn>
        </BtnWrapper>
        <SmurfWrapper>
          {smurfs.map(smurf => {
            return (
              <Smurf
                key={smurf.id}
                editMode={editMode}
                editSmurf={editSmurf}
                setEditMode={setEditMode}
                deleteSmurf={deleteSmurf}
                deleteMode={deleteMode}
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
