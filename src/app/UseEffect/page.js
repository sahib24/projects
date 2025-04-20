"use client";

import { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>Count: {count}</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click
        </button>
      </p>
    </div>
  );
}
