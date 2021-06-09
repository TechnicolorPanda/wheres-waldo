import score from '../components/Score'

const scores = score();

// __tests__/timerGame-test.js

// jest.useFakeTimers();

// test('registers timer each second', () => {

//   scores.myTimer();

//   expect(setInterval).toHaveBeenCalledTimes(1);
//   expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
// });

test('returns seconds in minutes and seconds', () => {
  expect(scores.formattedTime(80)).toBe('1:20');
  expect(scores.formattedTime(54)).toBe('54');
  expect(scores.formattedTime(125)).toBe('2:05');
})

test('returns number of items remaining to be found', () => {
  expect(scores.objectsRemain(true)).toEqual(2);
  expect(scores.objectsRemain(false)).toEqual(2);
  expect(scores.objectsRemain(true)).toEqual(1);
})

test('determines when last item is found', () => {
  expect(scores.lastObjectFound(0)).toBeTruthy();
  expect(scores.lastObjectFound(3)).toBeFalsy();
})
