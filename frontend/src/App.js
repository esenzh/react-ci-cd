import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ username, setUsername ] = useState('');
  
  useEffect(() => {
    getNames();
  }, [])

  async function getNames() {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }
  
  return (
    <>
    <h1>My Website</h1>
    <h3>My name is {username}</h3>
    </>
  );
}

export default App;
