import React from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 500px;
  max-width: 95%;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 10px 25px #ddd;
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`

function SmurfPage({smurfs, match}) {
    
    if (smurfs) {
        const smurf = smurfs.find(each => each.id == match.params.id);
        return (
            <Wrapper>
                <Card>
                    <img src={smurf.image || ''} alt="" height='70%'/>
                    <h1 style={{ margin: '10px 0' }}>{smurf.name}</h1>
                    <p style={{ margin: '5px 0' }}><strong>Age:</strong> {smurf.age} smurf years</p>
                    <p style={{ margin: '5px 0' }}><strong>Height:</strong> {smurf.height}</p>
                </Card>
            </Wrapper>
        )
    }

    return <div>Loading...</div>
   
}

export default SmurfPage;