import { useState } from "react";

export function Test(): JSX.Element {
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    outer: false,
    inner: false,
  });

  const handleActiveChange = (key: string) => {
    setActiveStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="test1">
      <div className={`test2 ${activeStates[0] ? "active" : ""}`}>
        <button
          onClick={() => handleActiveChange("0")}
          style={{ padding: "10px 20px", position: "absolute", top: "10px" }}
        >
          click outer
        </button>
        <div className={`test3 ${activeStates[1] ? "active" : ""}`}>
          <button
            onClick={() => handleActiveChange("1")}
            style={{
              padding: "10px 20px",
              position: "absolute",
              top: "50px",
              left: "100px",
            }}
          >
            click inner
          </button>
        </div>
      </div>
    </div>
  );
}
