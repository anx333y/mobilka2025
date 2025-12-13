const getMinutes = (t: number) => {
  return new Date(t).getTime() / 60000;
}

const getMelatoninScore = (start: number) => {
  const h = new Date(start).getHours();
  if (h < 23) return 1;
  if (h < 24) return 0.8;
  if (h < 1) return 0.6;
  if (h < 2) return 0.4;
  return 0.2;
}

const getCortisolScore = (end: number) => {
  const h = new Date(end).getHours();
  if (h >= 6 && h < 8) return 1;
  if (h < 9) return 0.8;
  if (h < 10) return 0.6;
  if (h < 6) return 0.4;
  return 0.3;
}

const getDurationScore = (start: number, end: number) => {
  const sleepHours = (getMinutes(end) - getMinutes(start)) / 60;

  if (sleepHours >= 7 && sleepHours <= 9) return 1;
  if (sleepHours >= 6) return 0.8;
  if (sleepHours < 5) return 0.4;
  if (sleepHours > 10) return 0.5;
  return 0.6;
}

const getHormonalSleepQuality = (start: number, end: number) => {
  const dur = getDurationScore(start, end);
  const mel = getMelatoninScore(start);
  const cor = getCortisolScore(end);

  const index = dur * 0.5 + mel * 0.25 + cor * 0.25;

  return {
    durationScore: dur,
    melatoninScore: mel,
    cortisolScore: cor,
    qualityIndex: +(index * 100).toFixed(1), // 0–100
  };
}

export {
  getMelatoninScore,
  getCortisolScore,
  getHormonalSleepQuality
}