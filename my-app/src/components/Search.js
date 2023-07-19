import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios'
import Menu from './menu'
import { useGlobal } from '../global';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [portfolios, setPortfolios] = useState([]);
    const {ID} = useGlobal()
    useEffect(()=>{
      async function getUserdata(){
        axios({
          method:'post',
          url:'/getallusers'
        }).then(response=>{
          if(response.data.result!="ERROR")
          {
            setPortfolios(response.data);
            console.log("Get data");
          }
          else{
            console.log("Error occured!");
          }
        }); 
      }
      getUserdata();
    },[])
      const navigate = useNavigate();
      const handlePortfolioClick = (portfolio) => {
        navigate(`/viewcv/${portfolio.id}`,{state:{editable:(portfolio.id==ID)}});
    };

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredPortfolios = portfolios&&portfolios.filter(
        (portfolio) =>
          portfolio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          portfolio.job.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
      <div className='logo'onClick={()=>navigate("/")}/>
      <Menu />
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
        {filteredPortfolios&&filteredPortfolios.map((portfolio, index) => (
            <div key={index} className="portfolio-item" onClick={() => handlePortfolioClick(portfolio)}>
            <h2>{portfolio.name}</h2>
            <p>{portfolio.job}</p>
            </div>
        ))}
        </div>

    
            </div>
        );
        }

export default Search;