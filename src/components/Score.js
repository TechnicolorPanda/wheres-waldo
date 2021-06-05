const score = () => {

  let seconds = 0;

  const myTimer = () => {
    seconds = seconds + 1;
    return seconds;
  }

  const timer = () => {
    let time = setInterval(myTimer, 1000);
    return time;
  }

  const objectsRemain = () => {
    // when object is found return number of objects that remain
  }

  return {
    timer,
    objectsRemain,
  }
}

export default score;