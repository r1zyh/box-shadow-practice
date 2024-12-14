import dayjs from "dayjs";
import { TTime } from "../../hooks/useCountdown";

type TLapClock = {
  lapStart: () => void;
  lapTime: TTime;
};

export function LapClock({ lapStart, lapTime }: TLapClock): JSX.Element {
  return (
    <div className="clock" role="region" aria-label="Clock" onClick={lapStart}>
      <div className="clock__outer lap">
        <div className="clock__inner lap">
          <div className="clock__time" id="timer">
            {dayjs.duration(lapTime).format("HH:mm:ss")}
          </div>
        </div>
      </div>
    </div>
  );
}
