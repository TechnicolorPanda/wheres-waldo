
const score = () => {

  let seconds = 0;
  let remaining = 3;

  const myTimer = () => {
    seconds = seconds + 1;
    return seconds;
  }

  const timer = () => {
    let time = setInterval(myTimer, 1000);
    return time;
  }

  const stopTimer = () => {
    let time = timer();
    clearInterval(time);
    return time;
  }

  const objectsRemain = (correctSelection) => {
    if(correctSelection) {remaining = remaining - 1};
    return remaining;
  }

  const lastObjectFound = (remaining) => {
    if(remaining === 0) {
      return true;
    } else {
      return false;
    }
  }

  return {
    timer,
    objectsRemain,
    lastObjectFound,
    stopTimer,
  }
}

export default score;