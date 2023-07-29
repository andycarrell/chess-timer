const format = (n: number) => (n < 0 ? "00" : prepend(n));
const prepend = (n: number) => (n < 10 ? `0${n}` : `${n}`);

type Props = { duration: number };

export const Duration = ({ duration }: Props) => {
  const minutes = Math.trunc(duration / 60 / 1000);
  const seconds = Math.trunc(duration / 1000) % 60;

  return (
    <span className="text timer-duration">
      {`${format(minutes)}:${format(seconds)}`}
    </span>
  );
};
