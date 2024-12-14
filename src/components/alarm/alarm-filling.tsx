import { TAlarmObj } from "./alarm";

type TAlarmFillingProps = {
  alarms: TAlarmObj[];
  toggleAlarm: (value: number) => void;
};

export function AlarmFilling({
  alarms,
  toggleAlarm,
}: TAlarmFillingProps): JSX.Element {
  return (
    <ul className="alarm__clock">
      {alarms.map((alarm, index) => (
        <li key={index} className="alarm__clock--item">
          <time className="time" dateTime={alarm.time} aria-label={alarm.time}>
            {alarm.time} <span className="time__period">{alarm.period}</span>
          </time>
          <label className="toggler">
            <input
              type="checkbox"
              className="toggler__input"
              checked={alarm.isActive}
              onChange={() => toggleAlarm(index)}
            />
            <span className="toggler__slider"></span>
          </label>
        </li>
      ))}
    </ul>
  );
}
