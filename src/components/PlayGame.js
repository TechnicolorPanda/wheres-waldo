import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaggedImage from './TaggedImage';
import Score from './Score';
import photoTag from './PhotoTag';
import database from './firebase';
import waldoBeach from '../images/waldo1.jpg';
import uniqid from 'uniqid';

const PlayGame = () => {

  const [items, setItems] = useState(3);
  const [timer, setTimer] = useState(0);
  const [photo, setPhoto] = useState(waldoBeach);
  const [dropdown, setDropdown] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [itemName, setItemName] = useState(false);
  const [tagOptions, setTagOptions] = useState([]);
  const [correctSelection, setCorrectSelection] = useState(false);

  const scores = Score();
  const tag = photoTag();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(scores.myTimer(timer));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('correctSelection');
    if (correctSelection === true) {
      const currentScore = scores.changeScore(correctSelection);
      console.log(currentScore);
      setItems(currentScore);
      setCorrectSelection(false);
    }
  }, [correctSelection])

  // changes remaining items when correct item is selected

  async function isTagCorrect(itemName, xCoordinate, yCoordinate) {

    let tagCorrect = await tag.selectTag(itemName, xCoordinate, yCoordinate);
    console.log(tagCorrect);
    return tagCorrect;
  }


  useEffect(() => {
    console.log('item number ' + itemName)

     if(typeof itemName === 'string') {

      // TODO: set state when selectTag finishes running

      setCorrectSelection(isTagCorrect(itemName, xCoordinate, yCoordinate));
    }
  }, [itemName])

  // toggles between hiding and showing dropdown menu

  useEffect(() => {
    const dropdownMenu = document.getElementById('dropdown-content');
    dropdown ? dropdownMenu.style.display = 'block': dropdownMenu.style.display = 'none';
  }, [dropdown])

  // determines coordinates of point clicked

  const findItem = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    positionButton(xPosition, yPosition);
    setXCoordinate(xPosition);
    setYCoordinate(yPosition);
  }

  // positions dropdown button on point selected

  const positionButton = (x, y) => {
    const buttonPlacement = document.getElementById('dropdown-content');
    buttonPlacement.style.position = "absolute";
    buttonPlacement.style.left = x + 'px';
    buttonPlacement.style.top = y + 'px';
  }

  // retrieves dropdown item selected

  const selectItem = (event) => {
    event.preventDefault();
    const itemValue = event.target.id;
    setItemName(itemValue);
    setDropdown(!dropdown);
  }

  // retrieves tagged items from firebase and places the names in an array

  useEffect(() => {
    let tagNames = [];
    database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        tagNames = tagNames.concat(doc.data().name);
      });
      setTagOptions(tagNames);
    })
  }, []);

  const listItems = (
    tagOptions.map((item) => 
      <li key = {uniqid()} id = {item}>{item}</li>
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