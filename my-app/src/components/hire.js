import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from './menu';
import axios from 'axios'
import { useNavigate } from 'react-router-dom/dist';

function Hire() {
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();
  const [hoveredJobId, setHoveredJobId] = useState(null);

  useEffect(() => {
    async function getUserdata(){
			axios({
			  method:'post',
			  url:'/gethireinfo',
        data:{}
			}).then(response=>{
			  if(response.data!="ERROR")
			  {
				setJobListings(response.data)
				
			  }
			  else{

			  }
			}); 
		  }
		  	getUserdata()
  }, []);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1em',
    padding: '0 10%',
    textAlign: 'center',
    marginTop: '2em', 
    marginBottom: '2em', 
  };

  const jobStyle = {
    width: '500px', 
    height: '300px',
    padding: '1em',
    marginTop: '0.5em', 
    boxSizing: 'border-box',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', 
    transition: 'transform 0.3s',
    cursor: 'pointer',
    borderRadius: '20px',
  };

  const hoverJobStyle = {
    ...jobStyle,
    transform: 'scale(1.05)',
  };

  const gotoLink = (link)=>{window.open(link)}

  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
    <h1 class = "hire-title">Recruitment</h1>
      <div style={containerStyle}>
        {jobListings.map((job,index) => (
          <div key={index} style={index=== hoveredJobId ? hoverJobStyle : jobStyle} onClick={()=>gotoLink(job.url)}
          onMouseEnter={() => setHoveredJobId(index)}
          onMouseLeave={() => setHoveredJobId(null)}
        >   
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {job.skills&&job.skills.map((skill)=>(
              <p>{skill}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hire;
