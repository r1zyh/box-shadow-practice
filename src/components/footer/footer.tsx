import { useState, useEffect } from "react";
import { AccessTime, AccessAlarm, Timer, AvTimer } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../util/const";

// если объект будет внутри компонента, он будет менять при каждом рендере, появляется новый объект
// поэтому нужно либо использовать useMemo, либо вынести options из компонента

const options = [
  { label: "Timer", Icon: AccessTime, address: "" },
  { label: "Alarm", Icon: AccessAlarm, address: AppRoute.Alarm },
  { label: "Stopwatch", Icon: Timer, address: AppRoute.Stopwatch },
  { label: "Settings", Icon: AvTimer, address: "" },
];

export function Footer(): JSX.Element {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentOption = options.find(
      (option) => option.address === location.pathname
    );
    if (currentOption) {
      setActiveItem(currentOption.label);
    }
  }, [location]);

  return (
    <footer className="options">
      {options.map(({ label, Icon, address }) => (
        <Link
          key={label}
          className={`option__item ${activeItem === label ? "active" : ""}`}
          aria-label={label}
          to={address}
          onClick={() => setActiveItem(label)}
        >
          <Icon className="options__button" aria-label={label} />
          <span className="visually-hidden">{label}</span>
        </Link>
      ))}
    </footer>
  );
}
