import React from 'react';
import '../styles/tagged-image.css';

const TaggedImage = (props) => {

  const { 
    photo,
    findItem,
    dropdown,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'body'>
        <button type = 'button' className = 'button'>
        <img className = 'play' src = {photo} alt = 'Wheres Waldo Beach Scene'
          onClick = {findItem}
        ></img>
        </button>

        <div className = 'dropdown-content' id = 'dropdown-content'>
          <ul>
            <li>Waldo</li>
            <li>cactus</li>
            <li>winter scarf</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaggedImage;