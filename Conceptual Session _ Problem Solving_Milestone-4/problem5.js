function calculateSleepTime(times) {
  let sum = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    sum += time;
  }

  // const totalSeconds = times.reduce((sum,val) => sum+val,0);
  const totalSeconds = sum;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const result = { hour: hours, minute: minutes, second: seconds };
  return result;
}
console.log(calculateSleepTime([1000, 499, 519, "300"]));
