const photoTag = () => {

  // create array with tag information

const coordinateRange = (correctCoordinate, selectedCoordinate) => {
  if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
    return true;
  }
}

const selectTag = (correctX, correctY, selectedX, selectedY) => {
  if (coordinateRange(correctX, selectedX) && coordinateRange(correctY, selectedY)) {
    return true;
  } else {
    return false;
  }
}

const selectCharacter = () => {
  return ('Waldo');
}

return {
  selectTag,
  selectCharacter
};
}

export default photoTag;