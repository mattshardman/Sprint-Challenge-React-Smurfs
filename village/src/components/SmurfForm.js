import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const FormPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  box-sizing: border-box;
  width: 500px;
  max-width: 95%;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 10px 25px #ddd;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px #ddd solid;
  font-size: 16px;
  :focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  background: deepskyblue;
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
`;

function SmurfForm({ addSmurf, history }) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  });

  const submitForm = e => {
    e.preventDefault();
    addSmurf(fields);
    setFields({
      name: '',
      age: '',
      height: ''
    });
    return history.push('/');
  }
 
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(st => ({ ...st, [name]: value }));
  };

  return (
    <FormPage>
      <Form onSubmit={submitForm}>
          <h1>Add a Smurf to the village</h1>
          <Input
            onChange={handleInputChange}
            placeholder="name"
            value={fields.name}
            name="name"
          />
          <Input
            onChange={handleInputChange}
            placeholder="age"
            value={fields.age}
            name="age"
          />
          <Input
            onChange={handleInputChange}
            placeholder="height"
            value={fields.height}
            name="height"
          />
          <Button type="submit">{'Add to the village'.toUpperCase()}</Button>
      </Form>
    </FormPage>
  );
}

export default withRouter(SmurfForm);
