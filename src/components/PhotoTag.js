import x from 'uniqid';
import database from './firebase';

const photoTag = () => {

  const getScreenSize = () => {
    const div = document.getElementById('image-area');
    const area = div.getBoundingClientRect();
    let x = area.width;
    let y = area.height;
    console.log(x, y);
    return {x, y};
  }

  // TODO: use .getBoundingClientRect() to determine position of image within the frame
  // Create test for this feature

  // uses size of screen to determine current placement of coordinate

  const resizeCoordinate = (oldCoordinate, coordinateType) => {
    let oldSize;
    let newSize = getScreenSize();

    if (coordinateType === 'x') {
      oldSize = 1053; 
      newSize = newSize.x;
    };
    if (coordinateType === 'y') {
      oldSize = 504;
      newSize = newSize.y;
    };
    return (oldCoordinate * newSize) / oldSize;
  }

  const selectTag = async (selectedName, selectedX, selectedY) => {

    console.log(selectedX, selectedY)

    const newSelectedX = resizeCoordinate(selectedX, 'x');
    const newSelectedY = resizeCoordinate(selectedY, 'y');

    // retrieves data regarding locations of items from firebase

    const snapshot = await database.collection('tags').get();
    ((snapshot.docs
      .forEach(doc => {

        // if the name of the item is the same as the tag selected in the dropdown menu, retrieve the
        // coordinates of the item

        if (doc.data().name === selectedName) {
          const correctX = correctSelection(doc.data().x, newSelectedX);
          const correctY = correctSelection(doc.data().y, newSelectedY);
          if (correctX && correctY) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })));
    }

  // determines if selected coordinate is within 5 pixels of tagged coordinate
    
  const coordinateRange = (correctCoordinate, selectedCoordinate) => {
    if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
      return true;
    }
  }

  const correctSelection = (correctCoordinate, selectedCoordinate) => {
    if (coordinateRange(correctCoordinate, selectedCoordinate)) {
      return true;
    } else {
      return false;
    }
  }

  return {
    selectTag,
  };
}

export default photoTag;