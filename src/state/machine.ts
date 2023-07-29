import { createMachine } from "robot3";

import { context } from "./context";
import { states } from "./states";

export const machine = createMachine(states, context);
