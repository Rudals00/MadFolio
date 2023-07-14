import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Main() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  return (
    <div>
      <div className='top-section'>
        <div className="backimage"></div>
      <h1 calassName='Title'>Write your own CV!</h1>
      </div>
      <div className='main-page'>
        <div className='nav-links'>
          <Link to="/login" className='nav-button'>Login</Link>
          <Link to="/signup" className='nav-button'>Sign up</Link>
        </div>
        <div className='create-cv-button'>
          <h2><Link to="/CreateCV" className='create-cv-link'>Create one!</Link></h2>
        </div>
        <div className='create-cv-button'>
          <h2><Link to="/CreateCV" className='create-cv-link'>Modify</Link></h2>
        </div>
      </div>
      <div className='bottom-section'></div>
    </div>
  );
}

export default Main;
