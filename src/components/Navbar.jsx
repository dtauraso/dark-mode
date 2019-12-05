import React, { useState } from 'react';
import { UseDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = UseDarkMode(false);
  // console.log(darkMode)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      {/* <UseDarkMode /> */}
      <div onClick={toggleMode} className="dark-mode__toggle">
        <div
          
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
