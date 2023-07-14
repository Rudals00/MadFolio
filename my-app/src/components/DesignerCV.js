import React from 'react';
import './cv-form.css';

function DesignerCV() {
  return (
    <div className="cv-form">
      <h1>Designer CV</h1>
      <form>
        <label>
          Personal Introduction:
          <textarea name="introduction" />
        </label>
        <label>
          Design Skills:
          <input type="text" name="skills" />
        </label>
        <label>
          Works:
          <textarea name="works" />
        </label>
        <label>
          Education:
          <textarea name="education" />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" />
        </label>
        <label>
          Design Platform Links:
          <input type="text" name="platformLinks" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default DesignerCV;
