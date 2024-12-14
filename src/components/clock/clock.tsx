import { useEffect, useState } from "react";
import { useCountDown } from "../../hooks/useCountdown";
import { AlarmClock } from "./alarm-clock";
import { LapClock } from "./lap-clock";

type TClockProps = {
  isAlarm?: boolean;
};

export function Clock({ isAlarm }: TClockProps): JSX.Element {
  const [time, setTime] = useState(new Date());
  const { lapTime, start } = useCountDown();

  const lapStart = () => {
    start(); // Запуск таймера с 1 часа
  };

  useEffect(() => {
    if (!isAlarm) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); // Очистка таймера
  }, [isAlarm]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegree = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30 градусов в час
  const minuteDegree = minutes * 6; // 360 / 60 = 6 градусов в минуту
  const secondDegree = seconds * 6; // 360 / 60 = 6 градусов в секунду

  return isAlarm ? (
    <AlarmClock
      hourDegree={hourDegree}
      minuteDegree={minuteDegree}
      secondDegree={secondDegree}
    />
  ) : (
    <LapClock lapStart={lapStart} lapTime={lapTime} />
  );
}
