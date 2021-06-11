const photoTag = () => {

  const tagArray = {
    image: [
      {name: 'Waldo', x: '588', y: '307'},
      {name: 'cactus', x: '808', y: '327'},
      {name: 'winter scarf', x: '273', y: '588'},
    ]
  }

  const coordinateRange = (correctCoordinate, selectedCoordinate) => {
    if (selectedCoordinate <= (correctCoordinate + 5) && (selectedCoordinate >= correctCoordinate - 5)) {
      return true;
    }
  }

  const selectTag = (number, selectedX, selectedY) => {
    const correctX = tagArray.image[number].x;
    const correctY = tagArray.image[number].y;
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