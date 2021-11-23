var findPoisonedDuration = function (timeSeries, duration) {
  let timeLapse = duration;
  let past = timeSeries[0];
  for (let i = 1; i < timeSeries.length; i++) {
    let affected = past + duration;
    if (affected <= timeSeries[i]) {
      timeLapse += duration;
    } else {
      timeLapse += timeSeries[i] - past;
    }
    past = timeSeries[i];
  }
  return timeLapse;
};
