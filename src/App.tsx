import { Counter, CounterBy } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <CounterBy />
    </>
  );
}

export default App;
