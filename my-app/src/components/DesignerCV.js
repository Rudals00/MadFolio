import React from 'react';

function DesignerCV() {
  return (
    <div>
      <h1>Designer CV</h1>
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
          Design Skills:
          <input type="text" name="skills" />
        </label>
        <label>
          Projects:
          <textarea name="projects"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default DesignerCV;