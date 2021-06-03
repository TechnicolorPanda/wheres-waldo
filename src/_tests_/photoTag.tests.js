import photoTag from '../components/PhotoTag.js';

const photo = photoTag();

const tagArray = {
  image: [
    {name: 'Waldo', coordinates: (40, 50)},
    {name: 'cactus', coordinates: (0, 10)},
    {name: 'winter scarf', coordinates: (100, 30)},
  ]
}

test ('tags location on image', () => {
    expect(photo.selectTag(tagArray.image[0].name['Waldo']), (45, 45)).toBeTruthy();
    expect(photo.selectTag(tagArray.image[0].name['cactus']), (100, 60)).toBeFalsy();
  })