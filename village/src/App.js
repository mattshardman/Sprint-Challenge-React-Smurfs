import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';

function App () {
  const [smurfs, setSmurfs] = useState([]);
  
  const getSmurfs = async () => {
    try {
      const res = await axios.get(url);
      setSmurfs(res.data);
    } catch(e) {
      console.log(e);
    }
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
