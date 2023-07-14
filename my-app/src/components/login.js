import React, { useState } from 'react';
import {Routes,Route } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import CreateCV from './createCV';
import { useNavigate } from 'react-router-dom/dist';
import { useGlobal } from '../global';

function LoginPage() {
  const {setID}=useGlobal()
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
        setID(username)
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
      <h1>Login Page</h1>
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