import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from './menu';
import axios from 'axios'
import { useNavigate } from 'react-router-dom/dist';

function Hire() {
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();
  const [jobType, setJobType] = useState('developer'); 
  const [hoveredJobId, setHoveredJobId] = useState(null);

  useEffect(() => {
    async function getUserdata() {
      let endpoint;
      switch (jobType) {
        case 'developer':
          endpoint = '/getHireInfo';
          break;
        case 'designer':
          endpoint = '/getDesignerHireInfo';
          break;
        default:
          return;
      }

      axios({
        method: 'post',
        url: endpoint,
        data: {}
      }).then(response => {
        if (response.data != "ERROR") {
          setJobListings(response.data)

        }
        else {

        }
      });
    }
    getUserdata()
  }, [jobType]); 

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
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '500px',
    height: '300px',
    padding: '1em',
    marginTop: '0.5em',
    boxSizing: 'border-box',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: 'white',
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(https://media.istockphoto.com/id/1461355175/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%B2%BD-%ED%9A%8C%EC%83%89-%EC%A7%88%EA%B0%90-%ED%9A%8C%EC%83%89-%EC%B6%94%EC%83%81-%EA%B7%B8%EB%9D%BC%EB%8D%B0%EC%9D%B4%EC%85%98-%EB%B0%B0%EA%B2%BD-%EC%82%AC%EC%A7%84.webp?b=1&s=612x612&w=0&k=20&c=dqIh99a3Y4GBNL5cU0eLYwV06mdgP4ijZj9_LzlMw5s=)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,  // control the transparency of the image
    zIndex: -1,
  };

  const hoverJobStyle = {
    ...jobStyle,
    transform: 'scale(1.05)',
  };
  const textStyle = {
    position: 'relative',
    zIndex: 1,
  };
  const jobTitleStyle = {
    ...textStyle,
    textTransform: 'uppercase',
    color: '#2F4F4F',
    fontSize: '1.5em',
  };
  
  const companyStyle = {
    ...textStyle,
    fontStyle: 'italic',
    fontSize: '1.5em',
    color: '#708090',
    marginTop: 'auto',
    marginBottom: 'auto',
  };
  
  const skillsStyle = {
    ...textStyle,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginTop: 'auto',
  };

  const buttonStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '30px',
    border:'none',
    fontWeight: 'bold',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s',
    ':hover': {
        backgroundColor: '#7E7E7E'
    }
    
}


  const gotoLink = (link) => { window.open(link) }

  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
      <h1 class="hire-title">Recruitment</h1>

      <div>
        <button style = {buttonStyle} onClick={() => setJobType('developer')}>Developer Jobs</button>
        <button style = {buttonStyle} onClick={() => setJobType('designer')}>Designer Jobs</button>
      </div>
      <div style={containerStyle}>
        {jobListings.map((job, index) => (
          <div key={index} style={index === hoveredJobId ? hoverJobStyle : jobStyle} onClick={() => gotoLink(job.url)}
            onMouseEnter={() => setHoveredJobId(index)}
            onMouseLeave={() => setHoveredJobId(null)}
          >
            <div style={backgroundImageStyle} />
            <h2 style={jobTitleStyle}>{job.title}</h2>
            <p style={companyStyle}>{job.company}</p>
            {job.skills && <p style={skillsStyle}>{job.skills.join('/ ')}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hire;
