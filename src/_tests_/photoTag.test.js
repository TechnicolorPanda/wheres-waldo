import photoTag from '../components/PhotoTag'

const photo = photoTag();

test ('tags location on image', () => {
  expect(photo.selectTag('Waldo', 590, 305)).toBeTruthy();
  expect(photo.selectTag('cactus', 331, 812)).toBeFalsy();
  expect(photo.selectTag('winter scarf', 278, 583)).toBeTruthy();
})
