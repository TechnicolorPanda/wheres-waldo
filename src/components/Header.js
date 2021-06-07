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
        <p class = 'remaining' id = 'items-remain'>Items remaining: {items}</p>
        <nav class='nav'></nav>
        <p>
          <span class = 'title' id = 'where'>Where's </span>
          <span class = 'title' id = 'waldo'> Waldo</span>
        </p>
        <nav class='nav'></nav>
        <p class = 'timer' id = 'timer'>Time: {timer}</p>
      </div>
    </div>
  );
}

export default Header;