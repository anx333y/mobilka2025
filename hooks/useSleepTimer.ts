// hooks/useSleepTimer.ts
import { useEffect, useState } from "react";
import { getActiveSession } from "../data/sleep";

export function useSleepTimer() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  const start = () => {
    setStartTime(Date.now());
  };

  const stop = () => {
    setStartTime(null);
  };

  const running = startTime !== null;

  useEffect(() => {
    (async () => {
      const active = await getActiveSession();
      setStartTime(active?.start ?? null);
    })();
  }, []);

  useEffect(() => {
    if (!startTime) {
      setElapsed(0);
      return;
    }

    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return {
    startTime,
    elapsed,
    running,
    start,
    stop
  };
}
