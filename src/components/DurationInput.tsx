import { useEffect, useRef } from "react";
import { SubmitButton, ClearButton } from "./IconButton";
import "../static/DurationInput.css";

type Props = {
  defaultValue: number;
  onCancel(): void;
  onClick(duration: number): void;
};

export const DurationInput = (props: Props) => {
  const durationInput = useRef<HTMLInputElement | null>(null);

  const handleOnSubmit = () => {
    props.onClick(durationInput.current?.valueAsNumber ?? 0);
  };

  useEffect(() => {
    durationInput.current?.focus();
  }, []);

  return (
    <div className="duration-input">
      <div>
        <input
          className="text duration-input--input"
          type="tel"
          ref={durationInput}
          defaultValue={props.defaultValue}
        />
      </div>
      <div className="duration-input--actions">
        <SubmitButton onClick={handleOnSubmit} />
        <ClearButton onClick={props.onCancel} />
      </div>
    </div>
  );
};
