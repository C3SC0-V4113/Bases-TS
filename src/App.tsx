import { Counter, CounterBy, CounterEffect } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
