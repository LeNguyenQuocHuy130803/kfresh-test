import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      
      {count === 10 && <p className="max-message">Maximum reached!</p>}
      
      <div className="button-group">
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
