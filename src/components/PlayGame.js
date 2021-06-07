import React, { useState } from 'react';
import Header from './Header';
import TaggedImage from './TaggedImage';
import waldoBeach from '../images/waldo1.jpg';

const PlayGame = () => {

  const [items, setItems] = useState(0);
  const [timer, setTimer] = useState(0);
  const [photo, setPhoto] = useState(waldoBeach);

  return (
    <div>
      <Header
        items = {items}
        timer = {timer}
      />
      <TaggedImage
        photo = {photo}
      />
    </div>
  )
} 

export default PlayGame;