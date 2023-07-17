import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeveloperCV() {
  const [educationEntries, setEducationEntries] = useState([]);
  const [workEntries, setWorkEntries] = useState([]);
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
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [skillDetails, setSkillDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState([]);

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleInputChange = (entriesSetter, index, event) => {
    entriesSetter((prevEntries) => {
      const values = [...prevEntries];
      values[index][event.target.name] = event.target.value;
      return values;
    });
  };

  const handleAddFields = (entriesSetter, entry) => {
    entriesSetter((prev) => [...prev, entry]);
  };
  const handleAddExperience = (index) => {
    const newExperience = workEntries[index];
    setExperienceDetails((prevDetails) => [...prevDetails, newExperience]);

    setWorkEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };
  const handleAddEducation = (index) => {
    const newEducation = educationEntries[index];
    setEducationDetails((prevDetails) => [...prevDetails, newEducation]);

    setEducationEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };
  const handleAddSkill = (index) => {
    const newSkill = skillEntries[index];
    setSkillDetails((prevDetails) => [...prevDetails, newSkill]);

    setSkillEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };

  const handleAddProject = (index) => {
    const newProject = projectEntries[index];
    setProjectDetails((prevDetails) => [...prevDetails, newProject]);

    setProjectEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };

  const handleAddAdditional = (index) => {
    const newAdditional = additionalEntries[index];
    setAdditionalDetails((prevDetails) => [...prevDetails, newAdditional]);

    setAdditionalEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };

  const handleRemove = (detailsSetter, index) => {
    detailsSetter((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  return (
    <div className="container">
      <h1>DeveloperCV</h1>
      <form>
        <h2>기본 정보</h2>
        <div className="form-group">
          <label>이름:</label>
          <input type="text" className="form-control" name="name" value={userInfo.name} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>현재 직군(or 학생):</label>
          <input type="text" className="form-control" name="occupation" value={userInfo.occupation} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>이메일 주소:</label>
          <input type="email" className="form-control" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>짧은 개인 소개:</label>
          <textarea className="form-control" name="introduction" value={userInfo.institution} onChange={handleUserInfoChange}></textarea>
        </div>
        <div className="form-group">
          <label>연락처:</label>
          <input type="text" className="form-control" name="contact" value={userInfo.contact} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>주소:</label>
          <input type="text" className="form-control" name="address" value={userInfo.address} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>github link:</label>
          <input type="text" className="form-control" name="github" value={userInfo.github} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>프로필 이미지:</label>
          <input type="file" className="form-control-file" name="image" />
        </div>

        <h2>학력 등 교육 관련</h2>
        {educationEntries.map((educationEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>학교 및 기관명:</label>
              <input type="text" className="form-control" name="institution" value={educationEntry.institution} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>간단 설명:</label>
              <textarea className="form-control" name="description" value={educationEntry.description} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>기간:</label>
              <input type="text" className="form-control" name="period" value={educationEntry.period} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddEducation(index)}>추가</button>
          </div>
        ))}
        <ul>
          {educationDetails.map((education, index) => (
            <li key={index}>
              기관명: {education.institution},
              설명: {education.description},
              기간: {education.period}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setEducationDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setEducationEntries, { institution: '', description: '', period: '' })}>
          학력 항목 추가
        </button>

        <h2>경력 추가</h2>
        {workEntries.length > 0 && workEntries.map((workEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>회사 및 기관명:</label>
              <input type="text" className="form-control" name="institution" value={workEntry.institution} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>간단 설명:</label>
              <textarea className="form-control" name="description" value={workEntry.description} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>기간:</label>
              <input type="text" className="form-control" name="period" value={workEntry.period} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddExperience(index)}>추가</button>
          </div>
        ))}
        <ul>
          {experienceDetails.map((experience, index) => (
            <li key={index}>
              기관명: {experience.institution},
              설명: {experience.description},
              기간: {experience.period}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setExperienceDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setWorkEntries, { institution: '', description: '', period: '' })}>
          경력 항목 추가
        </button>

        <h2>Development stacks</h2>
        {skillEntries.map((skillEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>기술명:</label>
              <input type="text" className="form-control" name="skill" value={skillEntry.skill} onChange={(event) => handleInputChange(setSkillEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>설명:</label>
              <textarea className="form-control" name="description" value={skillEntry.description} onChange={(event) => handleInputChange(setSkillEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddSkill(index)}>추가</button>
          </div>
        ))}
        <ul>
          {skillDetails.map((skill, index) => (
            <li key={index}>
              기술명: {skill.skill},
              설명: {skill.description}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setSkillDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setSkillEntries, { skill: '', description: '' })}>
          기술 스택 항목 추가
        </button>

        <h2>프로젝트</h2>
        {projectEntries.map((projectEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>프로젝트명:</label>
              <input type="text" className="form-control" name="project" value={projectEntry.project} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>설명:</label>
              <textarea className="form-control" name="description" value={projectEntry.description} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>githublink:</label>
              <input type="text" className="form-control" name="github" value={projectEntry.github} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>프로젝트 이미지:</label>
              <input type="file" className="form-control-file" name="image" value={projectEntry.image} onChange={(event) => handleInputChange(setProjectEntries, index, event)}/>
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddProject(index)}>추가</button>
          </div>
        ))}
        <ul>
          {projectDetails.map((project, index) => (
            <li key={index}>
              프로젝트명: {project.project},
              설명: {project.description},
              githublink: {project.github},
              프로젝트이미지: {project.image}

              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setProjectDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setProjectEntries, { project: '', description: '' })}>
          프로젝트 항목 추가
        </button>

        <h2>Additional things</h2>
        {additionalEntries.map((additionalEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>제목:</label>
              <input type="text" className="form-control" name="title" value={additionalEntry.title} onChange={(event) => handleInputChange(setAdditionalEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>내용:</label>
              <textarea className="form-control" name="content" value={additionalEntry.content} onChange={(event) => handleInputChange(setAdditionalEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddAdditional(index)}>추가</button>
          </div>
        ))}
        <ul>
          {additionalDetails.map((additional, index) => (
            <li key={index}>
              제목: {additional.title},
              내용: {additional.content}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setAdditionalDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setAdditionalEntries, { title: '', content: '' })}>
          기타 항목 추가
        </button>
        <div className="form-group">
        <input type="submit" className="btn btn-success" value="제출" />
        </div>
      </form>
    </div>
  );
}

export default DeveloperCV;
