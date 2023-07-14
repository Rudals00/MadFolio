import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,Link, useSearchParams} from 'react-router-dom'
import LoginPage from './components/login';
import Main from './components/Main'
import Signup from './components/signup';
import CreateCV from './components/createCV';
import Serach from './components/Search';
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
    </Routes>
    </BrowserRouter>
    </div>
    </GlobalContext.Provider>
  );

}

export default App;
