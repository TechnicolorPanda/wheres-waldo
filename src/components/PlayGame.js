import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaggedImage from './TaggedImage';
import Score from './Score';
import waldoBeach from '../images/waldo1.jpg';

const PlayGame = () => {

  const [items, setItems] = useState(3);
  const [timer, setTimer] = useState(0);
  const [photo, setPhoto] = useState(waldoBeach);
  const [dropdown, setDropdown] = useState(false);

  const scores = Score();

  const changeScore = (correctSelection) => {
    const remaining = scores.objectsRemain(correctSelection);
    setItems(remaining);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(scores.myTimer(timer));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const correctSelection = true;
    changeScore(correctSelection);
  }, []);

  const findItem = (event) => {
    console.log('find item');
    const dropdownMenu = document.getElementById('dropdown-content');
    setDropdown(!dropdown);
    dropdown ? dropdownMenu.style.display = 'block': dropdownMenu.style.display = 'none';
  }

  return (
    <div>
      <Header
        items = {items}
        timer = {timer}
      />
      <TaggedImage
        photo = {photo}
        findItem = {findItem.bind(this)}
        dropdown = {dropdown}
      />
    </div>
  )
} 

export default PlayGame;