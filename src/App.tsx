import { useState } from "react";
import { useMachine } from "react-robot";

import { Timer } from "./components/Timer";
import {
  RestartButton,
  PauseButton,
  DurationButton,
} from "./components/IconButton";
import DurationInput from "./components/DurationInput";
import { machine } from "./state/machine";
import "./static/App.css";

export const App = () => {
  const [current, send] = useMachine(machine);
  const matches = (name: (typeof current)["name"]) => name === current.name;
  const [isUpdating, setIsUpdating] = useState(false);

  const renderInput = () => (
    <div className="content-margin">
      <DurationInput
        defaultValue={current.context.limit / 60 / 1000}
        onClick={handleOnInputSubmit}
        onCancel={handleOnInputCancel}
      />
    </div>
  );

  const renderActionButtons = () => (
    <div className="action-buttons">
      <RestartButton onClick={() => send("reset")} />
      <div style={{ padding: "10px" }} />
      <PauseButton onClick={() => send("pause")} />
      <div style={{ padding: "5px" }} />
      <DurationButton onClick={handleOnInputClick} />
    </div>
  );

  const handleOnInputSubmit = (duration: number) => {
    send({ type: "reset", limit: duration * 60 * 1000 });
    setIsUpdating(false);
  };

  const handleOnInputCancel = () => {
    send("pause");
    setIsUpdating(false);
  };

  const handleOnInputClick = () => {
    send("pause");
    setIsUpdating(true);
  };

  return (
    <div className="App">
      <div className="body">
        <Timer
          className="vertical-flip"
          onClick={() => send("click1")}
          duration={current.context.limit - current.context.elapsed1}
          isActive={matches("play1")}
        />
        {isUpdating ? renderInput() : renderActionButtons()}
        <Timer
          onClick={() => send("click2")}
          duration={current.context.limit - current.context.elapsed2}
          isActive={matches("play2")}
        />
      </div>
    </div>
  );
};
