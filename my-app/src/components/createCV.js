import React, { useEffect,useState } from 'react';
import '../App.css';
import DeveloperCV from './DeveloperCV';
import DesignerCV from './DesignerCV';
import ManagerCV from './ManagerCV';
import { useGlobal } from '../global';
import axios from 'axios';

function CreateCV() {
  const [CVview,setView]=useState(null)
  const [data,setdata]=useState({})
  const {ID}=useGlobal()
useEffect(()=>{
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
      console.log(data)
      switch(data.job){
        case "developer":{
          setView(<DeveloperCV Data={data}/>)
        }
        case "designer":{
          setView(<DesignerCV Data={data}/>)
        }
        case "manager":{
          setView(<ManagerCV Data={data}/>)
        }
        default:{
          <p>잘못된 접근입니다.</p>
        }
      }
    }
    else{
      console.log("Error occured!");
    }
  });
  setView()
  
}
else{
  console.log("Nothing")
}},[CVview])
  return({CVview})
}

export default CreateCV;