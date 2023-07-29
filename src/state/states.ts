import { action, invoke, reduce, transition, state, guard } from "robot3";

import { elapse, reset, previous } from "./context";
import type { Context } from "./context";
import { abort, tick } from "./tick";

export const states = {
  idle: state(
    transition("click1", "play2"),
    transition("click2", "play1"),
    transition("reset", "idle", reduce(reset)),
  ),
  play1: invoke(
    tick,
    transition("done", "play1", reduce(elapse("elapsed1"))),
    transition("click1", "play2", action(abort)),
    transition("pause", "paused", reduce(previous("play1")), action(abort)),
    transition("reset", "idle", reduce(reset), action(abort)),
  ),
  play2: invoke(
    tick,
    transition("done", "play2", reduce(elapse("elapsed2"))),
    transition("click2", "play1", action(abort)),
    transition("pause", "paused", reduce(previous("play2")), action(abort)),
    transition("reset", "idle", reduce(reset), action(abort)),
  ),
  paused: state(
    transition(
      "pause",
      "play1",
      guard(({ previous }: Context) => previous === "play1"),
      reduce(previous(null)),
    ),
    transition(
      "pause",
      "play2",
      guard(({ previous }: Context) => previous === "play2"),
      reduce(previous(null)),
    ),
    transition("reset", "idle", reduce(reset)),
  ),
} as const;
