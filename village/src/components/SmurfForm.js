import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3333/smurfs';

function SmurfForm() {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  });

  const addSmurf = async event => {
    event.preventDefault();
    // add code to create the smurf using the api
    try {
      const res = await axios.post(url, fields);
      console.log(res)
      setFields({
        name: '',
        age: '',
        height: ''
      });
    } catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(st => ({ ...st, [name]: value }));
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addSmurf}>
          <input
            onChange={handleInputChange}
            placeholder="name"
            value={fields.name}
            name="name"
          />
          <input
            onChange={handleInputChange}
            placeholder="age"
            value={fields.age}
            name="age"
          />
          <input
            onChange={handleInputChange}
            placeholder="height"
            value={fields.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
