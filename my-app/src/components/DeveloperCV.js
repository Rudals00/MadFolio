import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeveloperCV() {
  const [educationEntries, setEducationEntries] = useState([]);
  const [workEntries, setWorkEntries] = useState([]);
  const [categoryEntries, setCategoryEntries] = useState([{ category: '', skills: [{ name: '', description: '' }] }]);
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
  // const [skillDetails, setSkillDetails] = useState([]);
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
  

  const handleAddProject = (index) => {
    const newProject = projectEntries[index];
    setProjectDetails((prevDetails) => [...prevDetails, newProject]);

    setProjectEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };
  //addtional things
  const handleAddAdditionalEntry = (index) => {
    const newEntry = additionalEntries[index];
    newEntry.subheadings = [];
    setAdditionalDetails((prevDetails) => [...prevDetails, newEntry]);

    setAdditionalEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };
  const handleAddSubheading = (entryIndex, subheadingIndex) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].subheadings.push({ title: '', content: '' });
      return newDetails;
    });
  };

  const handleRemoveSubheading = (entryIndex, subheadingIndex) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].subheadings.splice(subheadingIndex, 1);
      return newDetails;
    });
  };
  const handleSubheadingChange = (entryIndex, subheadingIndex, event) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].subheadings[subheadingIndex][event.target.name] = event.target.value;
      return newDetails;
    });
  };

  

  const handleRemove = (detailsSetter, index) => {
    detailsSetter((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  //development stack
  
  
  const handleCategoryChange = (index, event) => {
    const newCategoryEntries = [...categoryEntries];
    newCategoryEntries[index].category = event.target.value;
    setCategoryEntries(newCategoryEntries);
  };
  
  // 기술 스택 추가
  const handleAddSkill = (index) => {
    const newCategoryEntries = [...categoryEntries];
    newCategoryEntries[index].skills.push({ name: '', description: '' });
    setCategoryEntries(newCategoryEntries);
  };
  
  // 기술 스택 제거
  const handleRemoveSkill = (categoryIndex, skillIndex) => {
    const newCategoryEntries = [...categoryEntries];
    newCategoryEntries[categoryIndex].skills.splice(skillIndex, 1);
    setCategoryEntries(newCategoryEntries);
  };
  
  // 기술명 또는 설명 변경
  const handleSkillChange = (categoryIndex, skillIndex, field, event) => {
    const newCategoryEntries = [...categoryEntries];
    newCategoryEntries[categoryIndex].skills[skillIndex][field] = event.target.value;
    setCategoryEntries(newCategoryEntries);
  };
  
  // 분류 추가
  const handleAddCategory = () => {
    setCategoryEntries([...categoryEntries, { category: '', skills: [] }]);
  };
  
  // 분류 제거
  const handleRemoveCategory = (index) => {
    const newCategoryEntries = [...categoryEntries];
    newCategoryEntries.splice(index, 1);
    setCategoryEntries(newCategoryEntries);
  };
  //submit
  const handleSubmit = () => {
    
  }

  return (
    <div className="container">
      <h1>DeveloperCV</h1>
      <form onSubmit={handleSubmit} >
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

        <h2>Development Stacks</h2>
{categoryEntries.map((categoryEntry, index) => (
  <div key={index}>
    <div className="form-group">
      <label>분류:</label>
      <input
        type="text"
        className="form-control"
        name="category"
        value={categoryEntry.category}
        onChange={(event) => handleCategoryChange(index, event)}
      />
    </div>
    {categoryEntry.skills.map((skill, skillIndex) => (
      <div key={skillIndex}>
        <div className="form-group">
          <label>기술명:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={skill.name}
            onChange={(event) => handleSkillChange(index, skillIndex, 'name', event)}
          />
        </div>
        <div className="form-group">
          <label>설명:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={skill.description}
            onChange={(event) => handleSkillChange(index, skillIndex, 'description', event)}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleRemoveSkill(index, skillIndex)}
        >
          기술 스택 제거
        </button>
      </div>
    ))}
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => handleAddSkill(index)}
    >
      기술 스택 추가
    </button>
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => handleRemoveCategory(index)}
    >
      분류 제거
    </button>
  </div>
))}
<button
  type="button"
  className="btn btn-primary"
  onClick={handleAddCategory}
>
  분류 추가
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
            <button type="button" className="btn btn-secondary" onClick={() => handleAddAdditionalEntry(index)}>
              추가
            </button>
          </div>
        </div>
      ))}

      <ul>
        {additionalDetails.map((additional, entryIndex) => (
          <li key={entryIndex}>
            <h3>{additional.title}</h3>
            <ul>
              {additional.subheadings.map((subheading, subheadingIndex) => (
                <li key={subheadingIndex}>
                  <div className="form-group">
                    <label>소제목:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={subheading.title}
                      onChange={(event) => handleSubheadingChange(entryIndex, subheadingIndex, event)}
                    />
                  </div>
                  <div className="form-group">
                    <label>내용:</label>
                    <textarea
                      className="form-control"
                      name="content"
                      value={subheading.content}
                      onChange={(event) => handleSubheadingChange(entryIndex, subheadingIndex, event)}
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveSubheading(entryIndex, subheadingIndex)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleAddSubheading(entryIndex)}
            >
              소제목 추가
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemove(setAdditionalDetails, entryIndex)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleAddFields(setAdditionalEntries, { title: '', subheadings: [] })}
      >
        큰 제목 추가
      </button>
        <div className="form-group">
        <input type="submit" className="btn btn-success" value="제출" />
        </div>
      </form>
    </div>
  );
}

export default DeveloperCV;
