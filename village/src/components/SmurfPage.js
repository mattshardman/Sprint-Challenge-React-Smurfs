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
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
`

function SmurfPage({smurf}) {
    console.log(smurf)
    if (smurf) {
        return (
            <Wrapper>
                <Card>
                    {smurf.name}
                    {smurf.age}
                    {smurf.height}
                </Card>
            </Wrapper>
        )
    }

    return <div>Loading...</div>
   
}

export default SmurfPage;