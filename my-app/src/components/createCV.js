import React, { useState } from 'react';
import '../App.css';
import DeveloperCV from './DeveloperCV';
import DesignerCV from './DesignerCV';
import ManagerCV from './ManagerCV';

function CreateCV() {
  const user = { career: 'manager' }

  switch(user.career) {
    case 'developer':
      return <DeveloperCV />
    case 'designer':
      return <DesignerCV />
    case 'manager':
      return <ManagerCV />
    default:
      return <p>잘못된 접근입니다.</p>
  }
}

export default CreateCV;