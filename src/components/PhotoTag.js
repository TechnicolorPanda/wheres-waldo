import database from './firebase';
import firebase from './firebase';

const photoTag = () => {

  const retrieveXCoordinate = (selectedName) => {
    database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if (doc.data().name === selectedName) {
          return doc.data().x;
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

  const selectTag = (itemName, selectedX, selectedY) => {
    const correctX = retrieveXCoordinate(itemName);
    const correctY = retrieveYCoordinate(itemName);
    if (coordinateRange(correctX, selectedX) && coordinateRange(correctY, selectedY)) {
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