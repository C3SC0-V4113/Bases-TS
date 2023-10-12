import { Counter, CounterBy, CounterEffect, CounterHook } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  );
}

export default App;
