import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaggedImage from './TaggedImage';
import Score from './Score';
import photoTag from './PhotoTag';
import waldoBeach from '../images/waldo1.jpg';
import uniqid from 'uniqid';

const PlayGame = () => {

  const [items, setItems] = useState(3);
  const [timer, setTimer] = useState(0);
  const [photo, setPhoto] = useState(waldoBeach);
  const [dropdown, setDropdown] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  const scores = Score();
  const tag = photoTag();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(scores.myTimer(timer));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const item = 0;
    const correctSelection = tag.selectTag(item, xCoordinate, yCoordinate);
    const currentScore = scores.changeScore(correctSelection);
    setItems(currentScore);
  }, [xCoordinate, yCoordinate]);

  useEffect(() => {
    const dropdownMenu = document.getElementById('dropdown-content');
    dropdown ? dropdownMenu.style.display = 'block': dropdownMenu.style.display = 'none';
  }, [dropdown])

  const findItem = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    positionButton(xPosition, yPosition);
    setXCoordinate(xPosition);
    setYCoordinate(yPosition);
  }

  const positionButton = (x, y) => {
    const buttonPlacement = document.getElementById('dropdown-content');
    buttonPlacement.style.position = "absolute";
    buttonPlacement.style.left = x + 'px';
    buttonPlacement.style.top = y + 'px';
  }

  const selectItem = (event) => {
    var value = event.target.value;
    console.log(value);
  }

  const listItems = Object.keys(tag.tagArray).map((item) => 
    <li key = {uniqid()}>{item}</li>
  );

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
        items = {listItems}
        selectItem = {selectItem.bind(this)}
      />
    </div>
  )
} 

export default PlayGame;