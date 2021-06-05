import score from '../components/Score'

const scores = score();

// __tests__/timerGame-test.js

jest.useFakeTimers();

test('registers timer each second', () => {

  scores.timer();

  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('returns number of items remaining to be found', () => {
  expect(scores.objectsRemain(true)).toEqual(2);
  expect(scores.objectsRemain(false)).toEqual(2);
  expect(scores.objectsRemain(true)).toEqual(1);
})
