import React from 'react';
import '../styles/header.css';

const Header = (props) => {

  const { 
    items,
    timer,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'nav-bar'>
        <p className = 'remaining' id = 'items-remain'>Items remaining: {items}</p>
        <nav className ='nav'></nav>
        <p>
          <span className = 'title' id = 'where'>Where's </span>
          <span className = 'title' id = 'waldo'> Waldo</span>
        </p>
        <nav className ='nav'></nav>
        <p className = 'timer' id = 'timer'>Time: {timer}</p>
      </div>
    </div>
  );
}

export default Header;