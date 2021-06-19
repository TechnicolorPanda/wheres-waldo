import database from './firebase';

const photoTag = () => {

  const selectTag = async (selectedName, selectedX, selectedY) => {
    const snapshot = await database.collection('tags').get();
    ((snapshot.docs
      .forEach(doc => {
        if (doc.data().name === selectedName) {
          console.log(doc.data().name);
          const correctX = correctSelection(doc.data().x, selectedX);
          console.log(correctX);
          console.log(doc.data().x)
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
    
  const coordinateRange = (correctCoordinate, selectedCoordinate) => {
    if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
      return true;
    }
  }

  const correctSelection = (correctCoordinate, selectedCoordinate) => {
    console.log(correctCoordinate);
    console.log(selectedCoordinate);
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