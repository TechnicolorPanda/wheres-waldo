import tagArray from './tagArray';

const photoTag = () => {

  const firebase = tagArray();

  const coordinateRange = (correctCoordinate, selectedCoordinate) => {
    if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
      return true;
    }
  }

  const selectTag = (number, selectedX, selectedY) => {
    const correctX = firebase.tagArray[number].x;
    const correctY = firebase.tagArray[number].y;
    if (coordinateRange(correctX, selectedX) && coordinateRange(correctY, selectedY)) {
      return true;
    } else {
      return false;
    }
  }

  const selectCharacter = (number) => {
    return firebase.tagArray[number].name;
  }

return {
  selectTag,
  selectCharacter,
  tagArray,
};
}

export default photoTag;