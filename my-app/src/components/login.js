import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import { useGlobal } from '../global';
import Menu from './menu';
import '../App.css';
import { Form, Container, Row, Col, Alert } from 'react-bootstrap';

function LoginPage() {
  const { setID } = useGlobal()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Result, setResult] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: '/dologin',
      data: {
        'id': username,
        'password': password
      }
    }).then(response => {
      if (response.data.result === "SUCCESS") {
        setID(username)
        localStorage.setItem("id", username)
        navigate('/')
      } else {
        setResult("Try again")
      }
    });
  }
  const customMarginTop = {
    marginTop: '5rem' // 원하는 여백 값을 설정합니다.
  };
   const customMarginTop1 = {
    marginTop: '3rem' // 원하는 여백 값을 설정합니다.
  };
  const customMargin = {
    marginTop: '2rem',
    marginBottom: '2rem'
  };
  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
      <Container style={customMarginTop1}>
      <Row className="justify-content-center  vh-100">
        <Col xs={12} md={6} className="mt-5">
          <h1 >Login Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group style={customMarginTop}>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" style={customMargin}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <button className="btn-custom" type="submit">
              Submit
            </button>
          </Form>
          {Result && <Alert variant="danger" className="mt-3">{Result}</Alert>}
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
