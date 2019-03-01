import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

function App () {
  const [smurfs, setSmurfs] = useState([]);
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  const getSmurfs = async () => {
    const res = await axios.get(url);
    setSmurfs(res.data);
  }

  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div className="App">
      <SmurfForm />
      <Smurfs smurfs={smurfs} />
    </div>
    );
}

export default App;
