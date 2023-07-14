import React, { useState } from 'react';
import '../App.css';

function CreateCV() {
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
      <h1>Create your own CV!</h1>
     
    </div>
  );
}

export default CreateCV;