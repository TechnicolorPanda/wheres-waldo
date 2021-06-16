import config from './firebaseConfig';

const photoTag = () => {

  const retrieveXCoordinate = (selectedName) => {
    config().database.collection('tags').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        if (doc.data().name === selectedName) {
          return doc.data().x;
        };
      });
    })
  }

  const retrieveYCoordinate = (selectedName) => {
    config().database.collection('tags').get().then((snapshot) => {
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

  const selectTag = (selectedName, selectedX, selectedY) => {
    // const correctX = retrieveXCoordinate(selectedName);
    // const correctY = retrieveYCoordinate(selectedName);
    // if (coordinateRange(correctX, selectedX) && coordinateRange(correctY, selectedY)) {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;
  }

  return {
    selectTag,
  };
}

export default photoTag;