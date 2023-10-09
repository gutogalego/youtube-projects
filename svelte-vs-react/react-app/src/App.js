import { React, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
      <header className="App-header">
        <p>Count: {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
      </header>
  );
}

export default App;
