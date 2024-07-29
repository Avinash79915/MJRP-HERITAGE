import React from 'react';
import '../Component/toggle.css';

const Toggle = () => {
  return (
    <label className="burger" htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Toggle;
