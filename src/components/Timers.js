import React, { Component } from "react";
import Timer from "./Timer";
import { toggleFor } from "../helpers";

const INITIAL_STATE = {
  isTop: false,
  isBottom: false,
};

const start = (id) => () => ({
  isTop: id === "bottom",
  isBottom: id === "top",
});

export default class Timers extends Component {
  state = INITIAL_STATE;

  get isDefault() {
    return !this.state.isTop && !this.state.isBottom;
  }

  render() {
    const { isPaused, startDuration } = this.props;

    return (
      <div className="body">
        <Timer
          className="vertical-flip"
          onClick={this.handleOnClick("top")}
          duration={startDuration}
          isActive={!isPaused && this.state.isTop}
        />
        {this.props.children}
        <Timer
          onClick={this.handleOnClick("bottom")}
          duration={startDuration}
          isActive={!isPaused && this.state.isBottom}
        />
      </div>
    );
  }

  handleOnClick = (id) => (isActive) => {
    if (isActive) {
      this.setState(toggleFor("isBottom"));
      this.setState(toggleFor("isTop"));
    } else if (this.isDefault) {
      this.setState(start(id));
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.startDuration !== this.props.startDuration) {
      this.setState(() => INITIAL_STATE);
    }
  }
}
