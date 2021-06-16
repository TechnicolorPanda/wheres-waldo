import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaggedImage from './TaggedImage';
import Score from './Score';
import photoTag from './PhotoTag';
import tagArray from './tagArray';
import config from './firebaseConfig';
import waldoBeach from '../images/waldo1.jpg';
import uniqid from 'uniqid';

const PlayGame = () => {

  const [items, setItems] = useState(3);
  const [timer, setTimer] = useState(0);
  const [photo, setPhoto] = useState(waldoBeach);
  const [dropdown, setDropdown] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [itemNumber, setItemNumber] = useState('');
  const [tagOptions, setTagOptions] = useState([]);

  const scores = Score();
  const tag = photoTag();
  const firebase = tagArray();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(scores.myTimer(timer));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
     if(typeof itemNumber === 'number') {
      const correctSelection = tag.selectTag(itemNumber, xCoordinate, yCoordinate);
      const currentScore = scores.changeScore(correctSelection);
      setItems(currentScore);
    }
  }, [itemNumber]);

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
    console.log('select item');
    // TODO: return correct target value
    event.preventDefault();
    const itemValue = event.target.value;
    console.log(itemValue);
    setItemNumber(itemValue);
  }


  useEffect(() => {
    let tagNames = [];
    config().database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        tagNames = tagNames.concat(doc.data().name);
      });
      setTagOptions(tagNames);
    })
  }, []);

  const listItems = (
    tagOptions.map((item) => 
      <li key = {uniqid()}>{item}</li>
    )
  )

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