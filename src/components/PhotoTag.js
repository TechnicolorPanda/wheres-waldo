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

  // TODO: test for correctSelection only after X and Y coordinates are returned

  const selectTag = async(itemName, selectedX, selectedY) => {
    const correctX = await retrieveXCoordinate(itemName);
    const correctY = await retrieveYCoordinate(itemName);
    console.log('x = ' + correctX);
    console.log('y = ' + correctY);

    const correct = await correctSelection(correctX, selectedX, correctY, selectedY);
    console.log('x await ' + correctX);
    return correct;
  }

  return {
    selectTag,
  };
}

export default photoTag;