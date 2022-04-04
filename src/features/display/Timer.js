import React, { useEffect, useState } from 'react';

const Timer = ({ inhale, hold, exhale, hold2 }) => {
  const [[time, interval], setTime] = useState([inhale, 0]);

  const tick = () => {
    if (time > 1) {
      setTime([time - 1, interval]);
    } else {
      if (interval === 0) {
        setTime([hold, 1]);
      } else if (interval === 1) {
        setTime([exhale, 2]);
      } else if (interval === 2) {
        setTime([hold2, 3]);
      } else if (interval === 3) {
        setTime([inhale, 0]);
      }
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  let title;
  if (interval === 0) {
    title = 'Inhale';
  } else if (interval === 1 || interval === 3) {
    title = 'Hold';
  } else if (interval === 2) {
    title = 'Exhale';
  }

  return (
    <div>
      {title}
      <br />
      {time}
    </div>
  );
};

export default Timer;
