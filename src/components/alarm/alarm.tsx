import { useState } from "react";
import { LapFilling } from "./lap-filling";
import { AlarmFilling } from "./alarm-filling";

// Тип объекта с будильниками
export type TAlarmObj = { time: string; period: string; isActive: boolean };

// Тип объекта с таймерами
//type TLapsObj = { lap: string; time: string };

// пропсы
type TAlarmProps = {
  isAlarm?: boolean;
};

// объект с будильниками
const data = [
  { time: "5:00", period: "am", isActive: true },
  { time: "6:00", period: "am", isActive: false },
];

//объект с таймерами
const laps = [
  { lap: "Lap", time: "00:60:00" },
  { lap: "Lap", time: "00:60:00" },
];


export function Alarm({ isAlarm }: TAlarmProps): JSX.Element {
  const [alarms, setAlarms] = useState<TAlarmObj[]>(data);

  const toggleAlarm = (index: number) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm, i) =>
        i === index ? { ...alarm, isActive: !alarm.isActive } : alarm
      )
    );
  };

  return isAlarm ? (
    <AlarmFilling alarms={alarms} toggleAlarm={toggleAlarm} />
  ) : (
    <LapFilling laps={laps} />
  );
}
