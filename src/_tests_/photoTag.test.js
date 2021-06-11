import photoTag from '../components/PhotoTag'

const photo = photoTag();

test ('tags location on image', () => {
  expect(photo.selectTag(0, 590, 305)).toBeTruthy();
  expect(photo.selectTag(1, 331, 812)).toBeFalsy();
  expect(photo.selectTag(2, 278, 583)).toBeTruthy();
})

test ('selects proper character', () => {
  expect(photo.selectCharacter(0)).toBe('Waldo');
  expect(photo.selectCharacter(1)).toBe('cactus');
  expect(photo.selectCharacter(2)).toBe('winter scarf');
})