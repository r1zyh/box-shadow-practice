//Тип объекта таймера
type TLapObj = { lap: string; time: string };

type TLapFillingProps = {
  laps: TLapObj[];
};

/* <section className="button__section">
<button className="lap__button start">Start</button>
<button className="lap__button reset">Reset</button>
</section> */

export function LapFilling({ laps }: TLapFillingProps): JSX.Element {
  return (
    <>
      <ul className="alarm__clock">
        {laps.map((lap, index) => (
          <li key={index} className="alarm__clock--item lap">
            <div className="lap__details">
              <span
                className="lap__number"
                aria-label={`Lap number ${index + 1}`}
              >
                {index + 1}
              </span>
              <span className="lap__name">Lap</span>
            </div>
            <time
              className="time lap"
              dateTime={lap.time}
              aria-label={lap.time}
            >
              {lap.time}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
}
