const photoTag = () => {

  // create array with tag information

  const tagArray = {
    image: [
      {name: 'Waldo', x: '40', y: '50'},
      {name: 'cactus', x: '0', u: '10'},
      {name: 'winter scarf', x: '100', y: '30'},
    ]
  }

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

  const selectCharacter = (number) => {
    return tagArray.image[number].name;
  }

return {
  selectTag,
  selectCharacter
};
}

export default photoTag;