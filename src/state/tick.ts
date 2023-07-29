const now = () => Date.now();

let controller = new AbortController();
export const abort = () => controller.abort();
const signal = () => controller.signal;

export const tick = () => {
  if (signal().aborted) {
    return Promise.reject(new Error("aborted"));
  }

  const start = now();

  return new Promise<number>((resolve, reject) => {
    const timeout = setTimeout(() => {
      controller = new AbortController();
      resolve(now() - start);
    }, 100);

    signal().addEventListener("abort", () => {
      clearTimeout(timeout);
      controller = new AbortController();
      reject(new Error("aborted"));
    });
  });
};
