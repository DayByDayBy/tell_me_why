import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import WhyButton from "./components/WhyButton/WhyButton";
import Output from "./components/Output/Output";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Output />

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <WhyButton />
    </>
  );
}

export default App;
