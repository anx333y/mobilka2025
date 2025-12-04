import { getCortisolScore, getMelatoninScore } from "@/helpers/quality";

export function useSleepHormones(start: number, end: number) {
  const melatonin = getMelatoninScore(start) * 100;
  const cortisol = getCortisolScore(end) * 100;

  return { melatonin, cortisol };
}
