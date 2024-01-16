import React, { useState, useEffect } from "react";
import Button from './components/Button/Button';
import Timer from './components/Timer/Timer';

function App() {
  
  
  const [time, setTime] = useState(0);
  const [intervalValue, setIntervalValue] = useState(null);

  const startTimer = () => {
    if (intervalValue) clearInterval(intervalValue);
    setIntervalValue(setInterval(() => { setTime(prevValue => prevValue + 1) }, 1));
  };

  const stopTimer = () => {
    clearInterval(intervalValue);
  };

  useEffect(() => {
    return () => {
      if (intervalValue) clearInterval(intervalValue);
    };
  }, [intervalValue]);

  const resetTimer = () => {
    if (intervalValue) clearInterval(intervalValue);
    setTime(0);
  };

  return (
    <div>
      <Timer Timer={time} />
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </div>
  );
}

export default App;