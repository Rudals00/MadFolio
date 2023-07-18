import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';
import '../App.css'
import Menu from './menu'
import { useNavigate } from 'react-router-dom/dist';
import { Form, Button, Container, Col, Row, Dropdown } from 'react-bootstrap';


function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [CheckResult, setCheckResult] = useState(false);
  const [resulttext, setresulttext] = useState('');
  const [password, setPassword] = useState('');
  const [job, setJob] = useState('');
  const [duty, setDuty] = useState('');
  const [search, setSearch] = useState('');
  const [school, setSchool] = useState('');
  const [career, setCareer] = useState('');
  const [schoolList, setSchoolList] = useState(['한양대학교', '고려대학교', 'KAIST', '숙명여자대학교', '부산대학교', 'POSTEC', 'UNIST', '성균관대학교'])
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [experienceDetail, setExperienceDetail] = useState('');
  const [experienceDetails, setExperienceDetails] = useState([]);

  // 경력사항을 추가하는 함수
  const handleAddExperience = () => {
    setExperienceDetails(prev => [...prev, experienceDetail]);
    setExperienceDetail('');
  }

  useEffect(() => {
    if (search.length === 0) {
      setFilteredSchools([]);
    } else {
      setFilteredSchools(
        schoolList.filter(school =>
          school.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, schoolList]);

  const handleSchoolClick = (school) => {
    setSchool(school);
    setSearch(school);
    setFilteredSchools([]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (CheckResult) {
      axios({
        method: 'post',
        url: '/dosignup',
        data: {
          'id': username,
          'password': password,
          'job': job,
        }
      }).then(response => {
        if (response.data.result === "OK") {
          alert("가입 완료")
          navigate('/')
        }
      });
    }
    else {
      alert("아이디 중복확인을 해 주세요")
    }
  }

  const handleUsernameCheck = () => {
    axios({
      method: 'post',
      url: '/checkid',
      data: {
        'id': username
      }
    }).then(response => {
      if (response.data === "exist") {
        setCheckResult(false)
        setresulttext("이미 존재하는 ID입니다.")
      }
      else {
        setCheckResult(true)
        setresulttext("사용 가능한 ID입니다.")
      }
    });
  }

  const renderDuties = () => {
    switch (job) {
      case 'developer':
        return (
          <>
            <option value="front-end">프론트엔드</option>
            <option value="back-end">백엔드</option>
            <option value="full-stack">풀스택</option>
          </>
        );
      case 'designer':
        return (
          <>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="graphic">그래픽</option>
          </>
        );
      case 'manager':
        return (
          <>
            <option value="product">Product</option>
            <option value="project">Project</option>
            <option value="hr">HR</option>
          </>
        );
      default:
        return;
    }
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
  const floatRight = {
    float: 'right'
  };

  return (
    <div>

      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
      <Container style={customMarginTop1}>
        <Row className="justify-content-center  vh-100">
          <Col xs={12} md={6} className="mt-5">

            <h1>Signup Page</h1>


            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" style={customMarginTop}>
                <Form.Label>ID:</Form.Label>
                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button className="btn-custom" type="button" style={floatRight} onClick={handleUsernameCheck}>중복확인</button>
                <Form.Text>{resulttext}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formPassword" style={customMargin}>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formJob" style={customMargin}>
                <Form.Label>직군:</Form.Label>
                <Form.Control as="select" value={job} onChange={(e) => setJob(e.target.value)}>
                  <option value="">--선택하세요--</option>
                  <option value="developer">개발자</option>
                  <option value="designer">디자이너</option>
                </Form.Control>
              </Form.Group>


              <button className="btn-custom" type="submit" style={floatRight}>Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;