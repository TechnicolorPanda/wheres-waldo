import database from './firebase';

const photoTag = () => {

  const retrieveXCoordinate = (selectedName) => {
    database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if (doc.data().name === selectedName) {
          console.log(doc.data().x);
          return doc.data().x;
        } else {
          console.log(doc.data().name);
        };
      });
    })
  }

  const retrieveYCoordinate = (selectedName) => {
    database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if (doc.data().name === selectedName) {
          return doc.data().y;
        };
      });
    })
  }

  const coordinateRange = (correctCoordinate, selectedCoordinate) => {
    if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
      return true;
    }
  }

  const correctSelection = (correctX, selectedX, correctY, selectedY) => {
    if (coordinateRange(correctX, selectedX) && coordinateRange(correctY, selectedY)) {
      return true;
    } else {
      return false;
    }
  }

  const selectTag = (itemName, selectedX, selectedY) => {
    const correctX = retrieveXCoordinate(itemName);
    const correctY = retrieveYCoordinate(itemName);
    console.log('x = ' + correctX);
    console.log('y = ' + correctY);

    // TODO: return only after promise is returned

    return correctSelection(correctX, selectedX, correctY, selectedY)
  }

  return {
    selectTag,
  };
}

export default photoTag;