import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function DeveloperCV(props) {
  const navigate=useNavigate()
  const {id}=props
  const [educationEntries, setEducationEntries] = useState([]);
  const [workEntries, setWorkEntries] = useState([]);
  const [categoryEntries, setCategoryEntries] = useState([]);
  const [projectEntries, setProjectEntries] = useState([]);
  const [additionalEntries, setAdditionalEntries] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: '',
    job: '',
    email: '',
    description: '',
    phone: '',
    office: '',
    github: ''
  });
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [skillDetails, setskillDetails] = useState([]);
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

  const handleAddCategory = (entriesSetter, entry) => {
    entriesSetter((prev) => [...prev,entry]);
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
    newEntry.content = [];
    setAdditionalDetails((prevDetails) => [...prevDetails, newEntry]);

    setAdditionalEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(index, 1);
      return newEntries;
    });
  };

  const handleAddCategoryEntry = (index) => {
    const newEntry = categoryEntries[index];
    newEntry.substacks = [];
    setskillDetails((prevDetails)=> [...prevDetails,newEntry]);

    setCategoryEntries((prevEntries)=>{
      const newEntries = [...prevEntries];
      newEntries.splice(index,1);
      return newEntries;

    })
  }
  const handleAddSubheading = (entryIndex, subheadingIndex) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].content.push({ subtitle: '', content: '' });
      return newDetails;
    });
  };

  const handleAddSkill = (entryIndex, skillIndex) => {
    setskillDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].substacks.push({title: '', description: ''});
      return newDetails;
    });
  }

  const handleRemoveSubheading = (entryIndex, subheadingIndex) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].content.splice(subheadingIndex, 1);
      return newDetails;
    });
  };

  const handleRemoveSkillheading = (entryIndex, skillIndex) => {
    setskillDetails((prevDetails)=> {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].substacks.splice(skillIndex, 1);
      return newDetails;
    });
  };
  const handleSubheadingChange = (entryIndex, subheadingIndex, event) => {
    setAdditionalDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].content[subheadingIndex][event.target.name] = event.target.value;
      return newDetails;
    });
  };

  const handlesubstacksChange = (entryIndex, substacksIndex, event) =>{
    setskillDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[entryIndex].substacks[substacksIndex][event.target.name] = event.target.value;
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


  //submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("On submit")
    axios({
      method:'post',
      url:'/addcv',
      data:{
        'id':id&&id,
        'name':userInfo.name,
        'email':userInfo.email,
        'job':userInfo.job,
        'description':userInfo.description,
        'phone':userInfo.phone,
        'office':userInfo.office,
        'github':userInfo.github,
        'schools': educationDetails,
        'works': experienceDetails,
        'stacks':skillDetails,
        'additionls':additionalDetails,
        'projects':projectDetails
      }
    }).then(response=>{
      if(response.data.result=="SUCCESS")
      {
        alert("Item added!")
        navigate('/')
      }
      else{
        alert("Error!")
      }
    });
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
          <input type="text" className="form-control" name="job" value={userInfo.job} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>이메일 주소:</label>
          <input type="email" className="form-control" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>짧은 개인 소개:</label>
          <textarea className="form-control" name="description" value={userInfo.institution} onChange={handleUserInfoChange}></textarea>
        </div>
        <div className="form-group">
          <label>연락처:</label>
          <input type="text" className="form-control" name="phone" value={userInfo.phone} onChange={handleUserInfoChange} />
        </div>
        <div className="form-group">
          <label>주소:</label>
          <input type="text" className="form-control" name="office" value={userInfo.office} onChange={handleUserInfoChange} />
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
              <input type="text" className="form-control" name="name" value={educationEntry.name} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>간단 설명:</label>
              <textarea className="form-control" name="description" value={educationEntry.description} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>기간:</label>
              <input type="text" className="form-control" name="duration" value={educationEntry.duration} onChange={(event) => handleInputChange(setEducationEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddEducation(index)}>추가</button>
          </div>
        ))}
        <ul>
          {educationDetails.map((education, index) => (
            <li key={index}>
              기관명: {education.name},
              설명: {education.description},
              기간: {education.duration}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setEducationDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setEducationEntries, { name: '', description: '', duration: '' })}>
          학력 항목 추가
        </button>

        <h2>경력 추가</h2>
        {workEntries.length > 0 && workEntries.map((workEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>회사 및 기관명:</label>
              <input type="text" className="form-control" name="name" value={workEntry.name} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>간단 설명:</label>
              <textarea className="form-control" name="description" value={workEntry.description} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>기간:</label>
              <input type="text" className="form-control" name="duration" value={workEntry.duration} onChange={(event) => handleInputChange(setWorkEntries, index, event)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => handleAddExperience(index)}>추가</button>
          </div>
        ))}
        <ul>
          {experienceDetails.map((experience, index) => (
            <li key={index}>
              기관명: {experience.name},
              설명: {experience.description},
              기간: {experience.duration}
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setExperienceDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setWorkEntries, { name: '', description: '', duration: '' })}>
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
                  name="title"
                  value={categoryEntry.title}
                  onChange={(event) => handleInputChange(setCategoryEntries, index, event)}
                />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-secondary" onClick={() => handleAddCategoryEntry(index)}>
                  추가
                </button>
              </div>
              </div>
))}

              {/* Rendering substacks */}
              <ul>
                {skillDetails.map((skill, entryIndex) => (
                  <li key={entryIndex}>
                    <h3>{skill.title}</h3>
                    <ul>
                      {skill.substacks.map((skill,skillIndex)=>(
                        <li key={skillIndex}>
                          <div className="form-group">
                          <label>기술명:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={skill.title}
                            onChange={(event) => handlesubstacksChange(entryIndex, skillIndex, event)}
                          />
                        </div>
                        <div className="form-group">
                          <label>설명:</label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={skill.description}
                            onChange={(event) => handlesubstacksChange(entryIndex, skillIndex, event)}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleRemoveSkillheading(entryIndex, skillIndex)}
                        >
                          X
                        </button>
                      
                        </li>

                      ))}
                       </ul>
                       <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleAddSkill(entryIndex)}>
                     
                          
                  
              
                      기술추가
                    </button>
                 
  
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleRemove(setskillDetails,entryIndex)}
              >
                X
              </button>
              </li>
          ))}
          </ul>
          <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleAddCategory(setCategoryEntries, { title: '', substacks: [] })}
      >
        분류추가
      </button>

      <h2>프로젝트</h2>
        {projectEntries.map((projectEntry, index) => (
          <div key={index}>
            <div className="form-group">
              <label>프로젝트명:</label>
              <input type="text" className="form-control" name="title" value={projectEntry.title} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>설명:</label>
              <textarea className="form-control" name="description" value={projectEntry.description} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
            </div>
            <div className="form-group">
              <label>githublink:</label>
              <input type="text" className="form-control" name="link" value={projectEntry.link} onChange={(event) => handleInputChange(setProjectEntries, index, event)} />
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
              프로젝트명: {project.title},
              설명: {project.description},
              githublink: {project.link},
              프로젝트이미지: {project.image}

              <button type="button" className="btn btn-danger" onClick={() => handleRemove(setProjectDetails, index)}>X</button>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={() => handleAddFields(setProjectEntries, { title: '', description: '',link:''})}>
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
              {additional.content.map((subheading, subheadingIndex) => (
                <li key={subheadingIndex}>
                  <div className="form-group">
                    <label>소제목:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subtitle"
                      value={subheading.subtitle}
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
        onClick={() => handleAddFields(setAdditionalEntries, { title: '', content: [] })}
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
