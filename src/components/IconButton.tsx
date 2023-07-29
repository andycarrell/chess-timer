import checkBoxSrc from "../static/check-box.svg";
import clearSrc from "../static/clear-button.svg";
import pauseSrc from "../static/pause-button.svg";
import refreshSrc from "../static/refresh-button.svg";
import durationSrc from "../static/watch-with-blank-face.svg";
import "../static/IconButton.css";

const createIconButtonFor = (src: string) => (props: { onClick(): void }) => (
  <button onClick={props.onClick}>
    <img src={src} className="icon-button--logo" alt="logo" />
  </button>
);

export const PauseButton = createIconButtonFor(pauseSrc);
export const RestartButton = createIconButtonFor(refreshSrc);
export const DurationButton = createIconButtonFor(durationSrc);
export const SubmitButton = createIconButtonFor(checkBoxSrc);
export const ClearButton = createIconButtonFor(clearSrc);
