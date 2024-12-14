type TAlarmClock = {
  hourDegree: number;
  minuteDegree: number;
  secondDegree: number;
};

export function AlarmClock({
  hourDegree,
  minuteDegree,
  secondDegree,
}: TAlarmClock): JSX.Element {
  return (
    <div className="clock" role="region" aria-label="Clock">
      <div className="clock__outer alarm">
        <div className="clock__inner alarm">
          <div
            className="hand hour"
            style={{ transform: `rotate(${hourDegree}deg)` }}
          ></div>
          <div
            className="hand minute"
            style={{ transform: `rotate(${minuteDegree}deg)` }}
          ></div>
          <div
            className="hand second"
            style={{ transform: `rotate(${secondDegree}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
