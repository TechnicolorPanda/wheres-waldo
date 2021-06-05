import photoTag from '../components/PhotoTag'

const photo = photoTag();

test ('tags location on image', () => {
  expect(photo.selectTag(0, 45, 45)).toBeTruthy();
  expect(photo.selectTag(1, 100, 60)).toBeFalsy();
  expect(photo.selectTag(2, 102, 28)).toBeTruthy();
})

test ('selects proper character', () => {
  expect(photo.selectCharacter(0)).toBe('Waldo');
  expect(photo.selectCharacter(1)).toBe('cactus');
  expect(photo.selectCharacter(2)).toBe('winter scarf');
})