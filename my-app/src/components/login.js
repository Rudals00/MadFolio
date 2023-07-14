import React, { useState } from 'react';
import {Routes,Route } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import CreateCV from './createCV';
import { useNavigate } from 'react-router-dom/dist';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Result,setResult] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method:'post',
      url:'/dologin',
      data:{
        'id':username,
        'password':password
      }
    }).then(response=>{
      if(response.data.result=="SUCCESS")
      {
        navigate('/')
      }
      else{
        setResult("Try again")
      }
    });
    //console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h1>{Result}</h1>
        </div>
    </div>
  );
}

export default LoginPage;