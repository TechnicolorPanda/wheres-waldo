import React from 'react';
import '../styles/tagged-image.css';

const TaggedImage = (props) => {

  const { 
    photo,
    findItem,
    items,
    selectItem,
  } = props;

  // TODO: drop down object name instead of key value

  return (
    <div className = 'content'>
      <div className = 'body'>
        <img className = 'play' src = {photo} alt = 'Wheres Waldo Beach Scene'
          onClick = {findItem}
        ></img>
        <div className = 'dropdown-content' id = 'dropdown-content'>
          <ul>
            <button onClick = {selectItem} value = {items}>
              <div value = {items}>{items}</div>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaggedImage;