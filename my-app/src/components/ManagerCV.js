import React from 'react';

function ManagerCV() {
  return (
    <div>
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
          Experience:
          <textarea name="experience"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ManagerCV;