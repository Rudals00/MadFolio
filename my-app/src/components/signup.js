import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './signup.css';
import '../App.css'
import Menu from './menu'
import { useNavigate } from 'react-router-dom/dist';


function Signup() {
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [CheckResult, setCheckResult] = useState(true);
  const [resulttext, setresulttext] = useState('');
  const [password, setPassword] = useState('');
  const [job, setJob] = useState('');
  const [duty, setDuty] = useState('');
  const [search, setSearch] = useState('');
  const [school, setSchool] = useState('');
  const [career, setCareer] = useState('');
  const [schoolList, setSchoolList] = useState(['한양대학교','고려대학교','KAIST','숙명여자대학교','부산대학교','POSTEC','UNIST','성균관대학교'])
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
    if(CheckResult){
    axios({
      method:'post',
      url:'/dosignup',
      data:{
        'id':username,
        'password':password,
        'job':job,
        'duty':duty,
        'school':school,
        'career':career,
        'experiences':experienceDetails
      }
    }).then(response=>{
      if(response.data.result==="OK")
      {
        navigate('/')
      }
    });
  }
  else
  {

  }
  }

  const handleUsernameCheck = () => {
    axios({
      method:'post',
      url:'/checkid',
      data:{
        'id':username
      }
    }).then(response=>{
      if(response.data==="exist")
      {
        setCheckResult(false)
        setresulttext("이미 존재하는 ID입니다.")
      }
      else{
        setCheckResult(true)
        setresulttext("사용 가능한 ID입니다.")
      }
    });
  }

  const renderDuties = () => {
    switch(job) {
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
        return ;
    }
  }
  
  return (
    <div>
      <div className='logo'onClick={()=>navigate("/")}/>
      <Menu />
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="button" onClick={handleUsernameCheck}>중복확인</button>
        {resulttext}
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          직군:
          <select value={job} onChange={(e) => setJob(e.target.value)}>
            <option value="">--선택하세요--</option>
            <option value="developer">개발자</option>
            <option value="designer">디자이너</option>
            <option value="manager">매니저</option>
          
          </select>
        </label>
      
          <label>
            직무:
            <select value={duty} onChange={(e) => setDuty(e.target.value)}>
              <option value="">--선택하세요--</option>
              {renderDuties()}
            </select>
          </label>
        
        <label>
          학교:
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="학교 이름을 입력하세요"/>
          <div>
            {filteredSchools.map((school, index) => (
              <div key={index} onClick={() => handleSchoolClick(school)}>
                {school}
              </div>
            ))}
          </div>
        </label>
        <label>
          경력:
          <select value={career} onChange={(e) => setCareer(e.target.value)}>
            <option value="">--선택하세요--</option>
            <option value="신입">신입</option>
            <option value="경력">경력</option>
          </select>
        </label>
        {career === '경력' && (
          <div>
            <label>
              경력사항:
              <input type="text" value={experienceDetail} onChange={(e) => setExperienceDetail(e.target.value)} />
            </label>
            <button type="button" onClick={handleAddExperience}>추가</button> {/* "추가" 버튼 */}
          </div>
        )}
        {/* 현재까지 추가된 경력사항들을 보여줍니다. */}
      <ul>
        {experienceDetails.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signup;