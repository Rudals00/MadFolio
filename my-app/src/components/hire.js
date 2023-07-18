import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from './menu';
import { useNavigate } from 'react-router-dom/dist';

function Hire() {
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();
  const [hoveredJobId, setHoveredJobId] = useState(null);

  useEffect(() => {
    const listings = [
      { id: 1, title: 'Software Engineer', company: 'Company A' ,img: 'https://cdn.pixabay.com/photo/2020/01/06/18/13/letter-4745930_1280.jpg' },
      { id: 2, title: 'Product Manager', company: 'Company B' },
      { id: 3, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 5, title: 'Data Scientist', company: 'Company C' },
      { id: 6, title: 'Data Scientist', company: 'Company C' },
      { id: 7, title: 'Data Scientist', company: 'Company C' },
      { id: 8, title: 'Data Scientist', company: 'Company C' },
      { id: 9, title: 'Data Scientist', company: 'Company C' },
      { id: 10, title: 'Data Scientist', company: 'Company C' },
    ];

    setJobListings(listings);
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

 

  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
    <h1 class = "hire-title">Recruitment</h1>
      <div style={containerStyle}>
        {jobListings.map((job) => (
          <div key={job.id} style={job.id === hoveredJobId ? hoverJobStyle : jobStyle}
          onMouseEnter={() => setHoveredJobId(job.id)}
          onMouseLeave={() => setHoveredJobId(null)}
        >   
         <img src={job.img} alt={job.title} style={{width: '80%', height: '70%'}} /> 
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hire;
