import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import the CSS file
const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className='container'>
      <h1>Digital Clock</h1>
      <p>Current Time: {formatTime(currentTime)}</p>
    </div>
  );
};

export default DigitalClock;
