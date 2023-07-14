import React from 'react';
import './cv-form.css';

function DeveloperCV({data}) {
  return (
    <div className="cv-form">
      <h1>DeveloperCV</h1>
      <form>
        <label>
          이름:
          <input type="text" name="name" />
        </label>
        <label>
          이메일:
          <input type="email" name="email" />
        </label>
        <label>
          기술 스택:
          <input type="text" name="languages" />
        </label>
        <label>
          프로젝트:
          <textarea name="projects"></textarea>
        </label>
        <label>
          교육:
          <input type="text" name="education" />
        </label>
        <label>
          GitHub 링크:
          <input type="text" name="github" />
        </label>
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default DeveloperCV;