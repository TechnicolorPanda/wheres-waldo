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

  const objectsRemain = (correctSelection) => {
    if(correctSelection) {remaining = remaining - 1};
    return remaining;
  }

  return {
    timer,
    objectsRemain,
  }
}

export default score;