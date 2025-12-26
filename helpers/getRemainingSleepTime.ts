const getRemainingSleepTime = (startTime: string, durationHours: number) => {
  const [h, m] = startTime.split(':').map(Number);

  const now = new Date();

  const start = new Date(now);
  start.setHours(h, m, 0, 0);

  // Если время начала уже в будущем — значит сон начался вчера
  if (start > now) {
    start.setDate(start.getDate() - 1);
  }

  const end = new Date(start);
  end.setTime(start.getTime() + durationHours * 60 * 60 * 1000);

  const totalMs = end.getTime() - start.getTime();
  const remainingMs = Math.max(end.getTime() - now.getTime(), 0);

  const percentRemaining = Math.round((remainingMs / totalMs) * 100);
  const percentPassed = 100 - percentRemaining;

  const remainingTotalMinutes = Math.ceil(remainingMs / (1000 * 60));
  const remainingHours = Math.floor(remainingTotalMinutes / 60);
  const remainingMinutes = remainingTotalMinutes % 60;

  return {
    percentPassed,
    percentRemaining,
    remainingHours,
    remainingMinutes,
  };
}

export default getRemainingSleepTime;