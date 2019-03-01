import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  height: 380px;
  width: 250px;
  background: #fff;
  box-shadow: 0 4px 35px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 420ms, transform 420ms;
  margin: 10px;
  animation-name: ${({deleteMode}) => deleteMode ? 'wobble': 'none'};
  animation-duration: 300ms;
  animation-iteration-count: infinite;

  @keyframes wobble {
    0% { transform: rotate(0)};
    25% { transform: rotate(0.5deg)};
    50% { transform: rotate(0deg)};
    75% { transform: rotate(-0.5deg)};
    0% { transform: rotate(0)};
  }

  :hover {
    transform: ${({deleteMode, editMode}) => deleteMode || editMode ? 'none' : 'scale(1.02)'};
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
  position: relative;
  box-sizing: border-box;
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: skyblue;
`

const DeleteButton = styled.button`
  background: rgba(255,255,255,0.3);
  height: 25px;
  width: 25px;
  border-radius: 50%;
  position: absolute; 
  top: 10px;
  right: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Form = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    box-sizing: border-box;
    width: 80%;
    height: 30px;
    margin: 5px 0;
    padding: 0 10px;
    color: #000;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const Btn = styled.button`
  height: 30px;
  background: skyblue;
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 80%;
  margin: 10px 0;
`

const Smurf = ({id, image, name, height, age, editMode, editSmurf, setEditMode, deleteMode, deleteSmurf}) => {
  const [fields, setFields] = useState({
    name: '',
    height: '',
    age: '',
  });

  const deleteFunc = () => {
    deleteSmurf(id)
  } 

  const submitForm = e => {
    e.preventDefault();
    editSmurf(id, fields);
    setFields({
      name: '',
      age: '',
      height: ''
    });
    setEditMode(false);
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    setFields(st => ({ ...st, [name]: value }));
  };

  return (
    
      <Card deleteMode={deleteMode} editMode={editMode} onClick={!!deleteMode && deleteFunc}> 
        <Img>
          {deleteMode && <DeleteButton>
            <i className="material-icons" style={{ fontSize: 14 }}>close</i>
          </DeleteButton>}
          <img src={image} alt="" height="80%"/>
        </Img>
        <Text>
          { !editMode ?
            <React.Fragment>
              <h3>{name}</h3>
              <strong>{height} tall</strong>
              <p>{age} smurf years old</p>
            </React.Fragment>
          :
            <React.Fragment>
              <Form onSubmit={submitForm}>
                <input type="text" value={fields.name} placeHolder={name} name="name" onChange={handleInputChange} />
                <input type="text"  value={fields.height} placeHolder={height} name="height" onChange={handleInputChange} />
                <input type="text"  value={fields.age} placeHolder={age} name="age" onChange={handleInputChange} />
                <Btn type="submit">Change</Btn>
              </Form>
            </React.Fragment>
          }
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

