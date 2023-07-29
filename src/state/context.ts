export type Context = {
  limit: number;
  elapsed1: number;
  elapsed2: number;
  previous: "play1" | "play2" | null;
};

const DURATION_START_TOTAL = 600000;

export const context = (): Context => ({
  limit: DURATION_START_TOTAL,
  elapsed1: 0,
  elapsed2: 0,
  previous: null,
});

export const elapse =
  (state: "elapsed1" | "elapsed2") =>
  (ctx: Context, event: { data: number }): Context => ({
    ...ctx,
    [state]: ctx[state] + event.data,
  });

export const previous =
  (previous: Context["previous"]) =>
  (ctx: Context): Context => ({ ...ctx, previous });

export const reset = (_: unknown, event: { limit?: number }) => {
  const ctx = context();
  return {
    ...ctx,
    limit: event?.limit ?? ctx.limit,
  };
};
