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
      { id: 1, title: 'Software Engineer', company: 'Company A' },
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
    width: '500px', // 원하는 너비 값으로 변경해주세요
    height: '300px',
    padding: '1em',
    marginTop: '0.5em', // 아이템마다 마진을 추가합니다.
    boxSizing: 'border-box',
    boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', // 박스에 입체감을 추가합니다.
    transition: 'transform 0.3s', // 호버 효과를 부드럽게 만들기 위한 CSS transition
  cursor: 'pointer',
  };

  const hoverJobStyle = {
    ...jobStyle,
    transform: 'scale(1.05)', // 호버 효과에 따라 아이템을 약간 확대하여 표시
  };

 

  return (
    <div>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
    <h1 class = "hire-title">채용 정보</h1>
      <div style={containerStyle}>
        {jobListings.map((job) => (
          <div key={job.id} style={job.id === hoveredJobId ? hoverJobStyle : jobStyle}
          onMouseEnter={() => setHoveredJobId(job.id)}
          onMouseLeave={() => setHoveredJobId(null)}
        >
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hire;
