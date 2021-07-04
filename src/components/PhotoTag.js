import database from './firebase';

const photoTag = () => {

  const getScreenSize = (coordinateType) => {
    const div = document.getElementById('image-area');
    const area = div.getBoundingClientRect();
    let x = area.width;
    let y = area.height;
    console.log(x, y);
    if (coordinateType === 'x') {
      return x;
    } else {
      return y;
    }
  }

  // TODO: use .getBoundingClientRect() to determine position of image within the frame
  // Create test for this feature

  // uses size of screen to determine current placement of coordinate

  const resizeCoordinate = (oldCoordinate, coordinateType) => {
    let oldSize;
    let newSize = getScreenSize(coordinateType);
    console.log('new size ' + newSize);
    console.log('old coordinate ' + oldCoordinate);
    console.log('coordinate type ' + coordinateType);

    if (coordinateType === 'x') {
      oldSize = 895; 
    };
    if (coordinateType === 'y') {
      oldSize = 504;
    };
    return (oldCoordinate * newSize) / oldSize;
  }

  const selectTag = async (selectedName, selectedX, selectedY) => {

    // retrieves data regarding locations of items from firebase

    const snapshot = await database.collection('tags').get();
    ((snapshot.docs
      .forEach(doc => {

        // if the name of the item is the same as the tag selected in the dropdown menu, retrieve the
        // coordinates of the item

        // TODO: coordinates are not measuring out right

        const adjustedX = resizeCoordinate(doc.data().x, 'x');
        const adjustedY = resizeCoordinate(doc.data().y, 'y');

        if (doc.data().name === selectedName) {
          console.log(selectedX, selectedY);
          console.log(adjustedX, adjustedY);
          const correctX = correctSelection(adjustedX, selectedX);
          const correctY = correctSelection(adjustedY, selectedY);
          console.log(correctX, correctY);
          if (correctX && correctY) {
            console.log('correct');
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
    if (selectedCoordinate <= (correctCoordinate + 10) && (selectedCoordinate >= correctCoordinate - 10)) {
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