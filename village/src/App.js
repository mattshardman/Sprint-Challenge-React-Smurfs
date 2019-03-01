import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <Router>
      <div className="App">
        <Route 
          exact 
          path="/" 
          render={(props) => <Smurfs smurfs={smurfs} {...props} /> }  
        />
        <Route 
          path="/smurf-form" 
          component={SmurfForm}
        />
      </div>
    </Router>
    );
}

export default App;
