import { Duration } from "./Duration";
import "../static/Timer.css";

type Props = {
  duration: number;
  isActive: boolean;
  className?: string;
  onClick(): void;
};

export const Timer = ({ duration, onClick, isActive, className }: Props) => {
  const isValid = duration > 0;
  const handleOnClick = () => {
    if (isValid) {
      onClick();
    }
  };

  return (
    <div className={["content-margin", className].join(" ")}>
      <button
        className={[
          "timer-button",
          isActive && isValid ? "timer-button--active" : "",
          isValid ? "" : "timer-button--invalid",
        ].join(" ")}
        onClick={handleOnClick}
      >
        <Duration duration={duration} />
      </button>
    </div>
  );
};
