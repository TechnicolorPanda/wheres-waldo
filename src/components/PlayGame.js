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

  useEffect(() => {
    const dropdownMenu = document.getElementById('dropdown-content');
    dropdown ? dropdownMenu.style.display = 'block': dropdownMenu.style.display = 'none';
  }, [dropdown])

  const findItem = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
    let xPosition = event.clientX;
    console.log(xPosition);
    let yPosition = event.clientY;
    console.log(yPosition);
    positionButton(xPosition, yPosition);
  }

  const positionButton = (x, y) => {
    const buttonPlacement = document.getElementById('dropdown-content');
    buttonPlacement.style.position = "absolute";
    buttonPlacement.style.left = x + 'px';
    buttonPlacement.style.top = y + 'px';
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