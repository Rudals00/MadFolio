import React, { useEffect, useState } from 'react';
import '../App.css';
import Menu from './menu';
import { useNavigate } from 'react-router-dom/dist';

function Hire() {
  const [jobListings, setJobListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listings = [
      { id: 1, title: 'Software Engineer', company: 'Company A' },
      { id: 2, title: 'Product Manager', company: 'Company B' },
      { id: 3, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
      { id: 4, title: 'Data Scientist', company: 'Company C' },
    ];

    setJobListings(listings);
  }, []);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1em',
    padding: '0 15%',
    textAlign: 'center',
    marginTop: '2em', 
    marginBottom: '2em', 
  };

  const jobStyle = {
    border: '1px solid #000',
    padding: '1em',
    margin: '2em', // 아이템마다 마진을 추가합니다.
    boxSizing: 'border-box',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', // 박스에 입체감을 추가합니다.
  };

 

  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
    <h1 class = "hire-title">채용 정보</h1>
      <div style={containerStyle}>
        {jobListings.map((job) => (
          <div key={job.id} style={jobStyle}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hire;
