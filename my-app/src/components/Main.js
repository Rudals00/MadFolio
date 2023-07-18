import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useGlobal } from '../global';
import Menu from './menu'

function Main() {
  const { ID, setID } = useGlobal()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [TopRightView, setView] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  useEffect(() => {
    if (ID == "") {
      const saved = localStorage.getItem("id")
      if (saved)
        setID(saved)
    }
    if (ID != "")
      setView(<><div className='welcome'>{ID}님 환영합니다</div><div className='nav-links'> <Link to="/" onClick={handlelogout}>로그아웃</Link>
      
      <Link to={'viewcv/'+ ID} state={{editable:true}} >MyPortfolio</Link></div></>)
    else {
      setView(<div className='nav-links'>
        <Link to="/login" className='nav-button'>Login</Link>
        <Link to="/signup" className='nav-button'>Sign up</Link>
      </div>)
    }
  }, [ID])

  const handlelogout = () => {
    setID("")
    localStorage.removeItem("id")
  }
  return (
    <div>
      <Helmet>
        <title>Make your Portfolio</title>
      </Helmet>
      <div className='logo' onClick={() => navigate("/")} />
      <Menu />
      <div className='top-section'>
        <div className="backimage"></div>
        <h1 className='Title'>
          <div>Make your perfect</div>
          <div style={{ marginTop: "25px" }}>Portfolio</div>
        </h1>
      </div>
      <div className='main-page'>
        {TopRightView}
        <div className='create-cv-button'>
          <h2><Link to="/createCV" className='create-cv-link'>Create one</Link></h2>
        </div>
        <div className='create-cv-button'>
          <h2><Link to={'viewcv/'+ ID} state={{editable:true}} onClick={()=>{if(ID==""){alert("Login first!")}}} className='create-cv-link'>Modify</Link></h2>
        </div>
      </div>
      <div className='bottom-section'></div>
    </div>
  );
}

export default Main;