import { useState } from "react";

interface counterByProps {
  initialValue?: number;
}

export const CounterBy = ({ initialValue = 5 }: counterByProps) => {
  const [counterBy, setCounterBy] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (addBy: number) => {
    setCounterBy((prev) => ({
      clicks: prev.clicks + 1,
      counter: prev.counter + addBy,
    }));
  };

  const { clicks, counter } = counterBy;

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
