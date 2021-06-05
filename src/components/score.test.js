import score from '../components/Score'

const scores = score();

// __tests__/timerGame-test.js

jest.useFakeTimers();

test('registers timer each second', () => {

  scores.timer();

  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
