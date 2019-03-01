import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  height: 350px;
  width: 250px;
  background: #fff;
  box-shadow: 0 4px 35px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 420ms, transform 420ms;
  margin: 10px;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 5px 35px rgba(0,0,0,0.25);
  }
`;

const Text = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.div`
  box-sizing: border-box;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: skyblue;
`

const Smurf = ({id, name, height, age, deleteSmurf}) => {
  return (
    <Card onClick={() => deleteSmurf(id)}> 
      <Img>
      </Img>
      <Text>
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </Text>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

