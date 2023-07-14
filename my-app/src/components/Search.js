import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [portfolios, setPortfolios] = useState([
        {
          name: "User1",
          role: "Developer",
          skills: "React, Node.js",
        },
        {
          name: "User2",
          role: "Designer",
          skills: "Photoshop, Illustrator",
        },
        // 더 많은 포트폴리오 아이템들
      ]);
      const navigate = useNavigate();
      const handlePortfolioClick = (portfolio) => {
        navigate(`/portfolio/${portfolio.name}`);
    };

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredPortfolios = portfolios.filter(
        (portfolio) =>
          portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
      <div classsName='menu-item'>
        <div className="button-container">
    <Link to="/" className="custom-button">Main</Link>
    <Link to="/createCV" className="custom-button">Create</Link>
    <Link to="/Search" className="custom-button">Search</Link>
    <Link to="/Hire" className="custom-button">Hire</Link>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button">Go</button>
      </div>
      
        <div className="portfolio-list">
        {filteredPortfolios.map((portfolio, index) => (
            <div key={index} className="portfolio-item" onClick={() => handlePortfolioClick(portfolio)}>
            <h2>{portfolio.name}</h2>
            <p>Role: {portfolio.role}</p>
            <p>Skills: {portfolio.skills}</p>
            </div>
        ))}
        </div>

    
            </div>
        );
        }

export default Search;