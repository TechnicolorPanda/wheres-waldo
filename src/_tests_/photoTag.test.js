import photoTag from '../components/PhotoTag'

const photo = photoTag();

const tagArray = {
  image: [
    {name: 'Waldo', x: '40', y: '50'},
    {name: 'cactus', x: '0', u: '10'},
    {name: 'winter scarf', x: '100', y: '30'},
  ]
}

test ('tags location on image', () => {
  expect(photo.selectTag(tagArray.image[0].x, tagArray.image[0].y, 45, 45)).toBeTruthy();
  expect(photo.selectTag(tagArray.image[1].x, tagArray.image[0].y, 100, 60)).toBeFalsy();
  expect(photo.selectTag(tagArray.image[2].x, tagArray.image[2].y, 102, 28)).toBeTruthy();
})

test ('selects proper character', () => {
  expect(photo.selectCharacter(0)).toBe('Waldo');
  expect(photo.selectCharacter(1)).toBe('cactus');
  expect(photo.selectCharacter(2)).toBe('winter scarf');
})