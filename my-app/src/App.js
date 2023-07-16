import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,Link, useSearchParams} from 'react-router-dom'
import LoginPage from './components/login';
import Main from './components/Main'
import Signup from './components/signup';
import CreateCV from './components/createCV';
import Serach from './components/Search';
import PortfolioDetail from "./components/PortfolioDetail";
import './Portfolio/src/cv.css'
import HomePage from './Portfolio/src/pages/homepage'
import About from './Portfolio/src/pages/about'
import Project from './Portfolio/src/pages/projects'
import { useState } from 'react';
import { GlobalContext } from './global';
function App() {
  const [ID,setID]=useState('')

  return (
    <GlobalContext.Provider
    value={{ID,setID}}>
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/" exact={true} element={<Main />}></Route>
    <Route path="/login" exact={true} element={<LoginPage />}></Route>
    <Route path="/signup" exact={true} element={<Signup />}></Route>
    <Route path="/createCV" exact={true} element={<CreateCV />}></Route>
    <Route path="/Search" exact={true} element={<Serach />}></Route>
    <Route path="/viewcv" exact={true} element={<HomePage />}></Route>
    <Route path="/viewcv/about" exact={true} element={<About />}></Route>
    <Route path="/viewcv/projects" exact={true} element={<Project />}></Route>
    <Route path="/portfolio/:name" component={PortfolioDetail} />
    </Routes>
    </BrowserRouter>
    </div>
    </GlobalContext.Provider>
  );

}

export default App;
