import React from 'react';
import './cv-form.css';

function ManagerCV({data}) {
  return (
    <div className="cv-form">
      <h1>Manager CV</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Management Skills:
          <input type="text" name="skills" />
        </label>
        <label>
          Projects Managed:
          <textarea name="projects"></textarea>
        </label>
        <label>
          Education:
          <input type="text" name="education" />
        </label>
        <label>
          Contact Information:
          <input type="text" name="contact" />
        </label>
        <label>
          LinkedIn Profile:
          <input type="text" name="linkedin" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ManagerCV;