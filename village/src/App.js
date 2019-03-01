import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import SmurfPage from './components/SmurfPage';

const url = 'http://localhost:3333/smurfs';

function App () {
  const [smurfs, setSmurfs] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  
  const getSmurfs = async () => {
    try {
      const res = await axios.get(url);
      setSmurfs(res.data);
      setDeleteMode(false);
    } catch(e) {
      console.log(e);
    }
  }

  const addSmurf = async fields => {
    const url = 'http://localhost:3333/smurfs';

    try {
      const res = await axios.post(url, fields);
      setSmurfs(res.data);
      setDeleteMode(false);
    } catch (e) {
      console.log(e);
    }
  }

  const editSmurf = async (id, fields) => {
    const url = 'http://localhost:3333/smurfs';
    console.log(id, fields)
    try {
      const res = await axios.put(`${url}/${id}`, fields);
      console.log(res)
      setSmurfs(res.data);
      setDeleteMode(false);
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

  const routerProps = {
    editSmurf,
    deleteSmurf,
    editMode,
    setEditMode,
    deleteMode,
    setDeleteMode,
    smurfs,
  };

  return (
    <Router>
      <div className="App">
        <Header/>
        {smurfs ?
        <React.Fragment>
          <Route 
            exact 
            path="/" 
            render={(props) => <Smurfs 
              {...routerProps} 
              {...props}
            /> }  
          />
          <Route path="/smurf/:id" render={(props) => <SmurfPage {...props} smurfs={smurfs}/>}/>
          <Route 
            path="/smurf-form" 
            render={(props) => <SmurfForm addSmurf={addSmurf} {...props} />}
          />
        </React.Fragment>
        :
        <div>Loading...</div>
        }
      </div>
    </Router>
    );
}

export default App;
