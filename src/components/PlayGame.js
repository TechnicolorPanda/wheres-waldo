import React, { useState } from 'react';
import Header from './Header';

const PlayGame = () => {

  const [items, setItems] = useState(0);
  const [timer, setTimer] = useState(0);

  return (
    <div>
      <Header
        items = {items}
        timer = {timer}
      />
    </div>
  )
} 

export default PlayGame;