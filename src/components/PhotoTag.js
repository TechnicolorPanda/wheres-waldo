import database from './firebase';

const photoTag = () => {

  // TODO: use .getBoundingClientRect() to determine position of image within the frame
  // Create test for this feature

  // uses size of screen to determine current placement of coordinate

  const resizeCoordinate = (oldCoordinate, newSize, coordinateType) => {
    let oldSize;
    if (coordinateType === 'x') {oldSize = 1053};
    if (coordinateType === 'y') {oldSize = 669};
    return (oldCoordinate * newSize) / oldSize;
  }

  // TODO: return consistant X coordinate

  const selectTag = async (selectedName, selectedX, selectedY) => {

    // retrieves data regarding locations of items from firebase

    const snapshot = await database.collection('tags').get();
    ((snapshot.docs
      .forEach(doc => {

        // if the name of the item is the same as the tag selected in the dropdown menu, retrieve the
        // coordinates of the item

        if (doc.data().name === selectedName) {
          const correctX = correctSelection(doc.data().x, selectedX);
          const correctY = correctSelection(doc.data().y, selectedY);
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