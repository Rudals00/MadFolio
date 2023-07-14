import React from 'react';

function DeveloperCV() {
  return (
    <div>
      <h1>Developer CV</h1>
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
          Programming Languages:
          <input type="text" name="languages" />
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

export default DeveloperCV;