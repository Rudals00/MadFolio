import React, { useEffect,useState } from 'react';
import '../App.css';
import DeveloperCV from './DeveloperCV';
import DesignerCV from './DesignerCV';
import ManagerCV from './ManagerCV';
import Menu from './menu'
import { useGlobal } from '../global';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateCV() {
  const [CVview,setView]=useState(null)
  const [data,setdata]=useState({})
  const {ID}=useGlobal()
  const navigate=useNavigate()
useEffect(()=>{
  async function getUserdata(){
    if(ID!="")
   {
    axios({
      method:'post',
      url:'/getuserdata',
      data:{
        'id':ID
      }
    }).then(response=>{
      if(response.data.result!="ERROR")
      {
        setdata(response.data)
        
        switch(data.job){
          case 'developer':
            setView(<DeveloperCV id={ID}/>)
            break;
          case 'manager':
              setView(<ManagerCV id={ID}/>)
              break;
          case 'designer':
            setView(<DesignerCV id={ID}/>)
              break;
          default:
            setView(<p>잘못된 접근입니다.</p>)
        }
      }
      else{
        console.log("Error occured!");
      }
    }); 
  }
  else{
    setView(<DeveloperCV/>)
  }
  }
  getUserdata();
},[CVview])

  return (<div>
    <div>
      <div className='logo'onClick={()=>navigate("/")}/>
      <Menu/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    {CVview}</div>);
}

export default CreateCV;