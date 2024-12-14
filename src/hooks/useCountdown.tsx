import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export type TTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

export function useCountDown() {
  const [lapTime, setTime] = useState<TTime>({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (lapTime.hours === 0 && lapTime.minutes === 0 && lapTime.seconds === 0)
      return;

    const timeout = setTimeout(() => {
      const currentTime = dayjs.duration({
        hours: lapTime.hours,
        minutes: lapTime.minutes,
        seconds: lapTime.seconds,
      });

      if (currentTime.asSeconds() > 0) {
        const updatedTime = currentTime.subtract(1, "second");
        setTime({
          hours: updatedTime.hours(),
          minutes: updatedTime.minutes(),
          seconds: updatedTime.seconds(),
        });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [lapTime, isRunning]);

  function start(): void {
    const timeDuration = dayjs.duration(3600, "seconds");
    setTime({
      hours: timeDuration.hours(),
      minutes: timeDuration.minutes(),
      seconds: timeDuration.seconds(),
    });
    setIsRunning(true);
  }

  return { lapTime, start };
}
