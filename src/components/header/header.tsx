import { useState } from 'react';
import SettingsIcon from "@mui/icons-material/Settings";

export function Header(): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header__block">
      <h1 className="title">Clock</h1>
      <button
        className={`settings ${isActive ? 'active' : ''}`}
        type="button"
        aria-label="Settings"
        onClick={() => setIsActive(!isActive)}
      >
        <SettingsIcon className="settings__button" aria-label="Settings" />
      </button>
    </header>
  );
}
