import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';

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

  const addSmurf = async fields => {
    const url = 'http://localhost:3333/smurfs';

    try {
      const res = await axios.post(url, fields);
      setSmurfs(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  const deleteSmurf = async id => {
    const url = 'http://localhost:3333/smurfs';
    try {
      const res = await axios.delete(`${url}/${id}`);
    setSmurfs(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route 
          exact 
          path="/" 
          render={(props) => <Smurfs deleteSmurf={deleteSmurf} smurfs={smurfs} {...props} /> }  
        />
        <Route 
          path="/smurf-form" 
          render={(props) => <SmurfForm addSmurf={addSmurf} {...props} />}
        />
      </div>
    </Router>
    );
}

export default App;
