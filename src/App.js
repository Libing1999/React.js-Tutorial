import { useState } from "react";
import "./app.css";
function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <h1>count:{count}</h1>
      <button onClick={addCount}>Click</button>
    </div>
  );
}

export default App;
