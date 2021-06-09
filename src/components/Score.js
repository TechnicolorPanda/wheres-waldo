
const score = () => {

  let seconds = 0;
  let remaining = 3;

  const myTimer = () => {
    seconds = seconds + 1;
    const time = formattedTime(seconds);
    return time;
  }

  const formattedTime = (seconds) => {
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds - (minutes * 60);
    if (minutes > 0 && remainingSeconds > 9) {
      return (minutes + ':' + remainingSeconds);
    } else if (minutes > 0 && remainingSeconds < 10) {
      return (minutes + ':0' + remainingSeconds);
    } else {
      return seconds.toString();
    }
  }

  const stopTimer = (time) => {
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
    myTimer,
    formattedTime,
    objectsRemain,
    lastObjectFound,
    stopTimer,
  }
}

export default score;