import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Main() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기서 username과 password를 사용하여 로그인 로직을 처리합니다.
    // 예를 들어 API를 호출하여 로그인을 시도할 수 있습니다.
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/signup">create ID</Link>
      <br></br>
      <h2><Link to="/CreateCV">Create one!</Link></h2>
    </div>
  );
}

export default Main;