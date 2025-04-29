'use client'

import { useState } from 'react'

export default function useStatePage() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => { setCount(count - 1); };
  const handleIncrement = () => { setCount(count + 1); };
  const handleReset = () => { setCount(0); };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="wrapper">
        <div className="grid">
          <p>useState</p>
          <span>{count}</span>
          <input type="button" value="Decrement" onClick={handleDecrement} />
          <input type="button" value="Increment" onClick={handleIncrement} />
        </div>
        <input type="button" value="Reset count" onClick={handleReset} />
      </div>
    </div>
  );
}
