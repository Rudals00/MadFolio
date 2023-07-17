import React, { useState } from 'react';
import './cv-form.css';


function DeveloperCV() {
  const [educationEntries, setEducationEntries] = useState([]);
  const [skillEntries, setSkillEntries] = useState([]);
  const [projectEntries, setProjectEntries] = useState([]);
  const [additionalEntries, setAdditionalEntries] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    occupation: '',
    email: '',
    introduction: '',
    contact: '',
    address: '',
    github: '',
  });

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleInputChange = (entriesSetter, index, event) => {
    entriesSetter(prevEntries => {
      const values = [...prevEntries];
      values[index][event.target.name] = event.target.value;
      return values;
    });
  };

  const handleAddFields = (entriesSetter, entry) => {
    entriesSetter(prev => [...prev, entry]);
  };
  return (
    <div className="cv-form">
      <h1>DeveloperCV</h1>
      <form>
        <h2>기본 정보</h2>
        <label>
          이름:
          <input type="text" name="name" value={userInfo.name} onChange={handleUserInfoChange} />
        </label>
        <label>
          현재 직군(or 학생):
          <input type="text" name="occupation" value={userInfo.occupation} onChange={handleUserInfoChange} />
        </label>
        <label>
          이메일 주소:
          <input type="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
        </label>
        <label>
          개인 소개:
          <textarea name="introduction"></textarea>
        </label>
        <label>
          연락처:
          <input type="text" name="contact" value={userInfo.contact} onChange={handleUserInfoChange} />
        </label>
        <label>
          주소:
          <input type="text" name="address" value={userInfo.address} onChange={handleUserInfoChange} />
        </label>
        <label>
          깃허브 링크:
          <input type="text" name="github" value={userInfo.github} onChange={handleUserInfoChange} />
        </label>
        <label>
          대표 이미지:
          <input type="file" name="image" />
        </label>

        <h2>학력 등 교육 관련</h2>
        {educationEntries.map((educationEntry, index) => (
          <div key={index}>
            <label>
              기관명:
              <input type="text" name="institution" value={educationEntry.institution} onChange={event => handleInputChange(setEducationEntries, index, event)} />
            </label>
            <label>
              간단 설명:
              <textarea name="description" value={educationEntry.description} onChange={event => handleInputChange(setEducationEntries, index, event)} />
            </label>
            <label>
              기간:
              <input type="text" name="period" value={educationEntry.period} onChange={event => handleInputChange(setEducationEntries, index, event)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(setEducationEntries, { institution: '', description: '', period: '' })}>
          학력 항목 추가
        </button>

        <h2>기술 스택</h2>
        {skillEntries.map((skillEntry, index) => (
          <div key={index}>
            <label>
              기술명:
              <input type="text" name="skill" value={skillEntry.skill} onChange={event => handleInputChange(setSkillEntries, index, event)} />
            </label>
            <label>
              설명:
              <textarea name="description" value={skillEntry.description} onChange={event => handleInputChange(setSkillEntries, index, event)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(setSkillEntries, { skill: '', description: '' })}>
          기술 스택 항목 추가
        </button>

        <h2>프로젝트</h2>
        {projectEntries.map((projectEntry, index) => (
          <div key={index}>
            <label>
              프로젝트명:
              <input type="text" name="project" value={projectEntry.project} onChange={event => handleInputChange(setProjectEntries, index, event)} />
            </label>
            <label>
              설명:
              <textarea name="description" value={projectEntry.description} onChange={event => handleInputChange(setProjectEntries, index, event)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(setProjectEntries, { project: '', description: '' })}>
          프로젝트 항목 추가
        </button>

        <h2>기타 항목</h2>
        {additionalEntries.map((additionalEntry, index) => (
          <div key={index}>
            <label>
              제목:
              <input type="text" name="title" value={additionalEntry.title} onChange={event => handleInputChange(setAdditionalEntries, index, event)} />
            </label>
            <label>
              내용:
              <textarea name="content" value={additionalEntry.content} onChange={event => handleInputChange(setAdditionalEntries, index, event)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={() => handleAddFields(setAdditionalEntries, { title: '', content: '' })}>
          기타 항목 추가
        </button>

        <input type="submit" value="제출" />
      </form>
    </div>
  );
}


export default DeveloperCV;