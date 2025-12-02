export function useSleepHormones(hour = new Date().getHours()) {
  // Melatonin: max at 02:00 (scale 0–100)
  const melatonin = Math.max(0, 100 - Math.abs(hour - 2) * 20);

  // Cortisol: max at 08:00
  const cortisol = Math.max(0, 100 - Math.abs(hour - 8) * 12);

  return { melatonin, cortisol };
}
