import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('December 26, 2023 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>
        <p>{timeRemaining.days} dni {timeRemaining.hours} godzin {timeRemaining.minutes} minut {timeRemaining.seconds} sekund</p>
        <p>Czyli:</p>
        <p>{timeRemaining.days * 24 + timeRemaining.hours} godzin</p>
        <p>Czyli:</p>
        <p>{timeRemaining.days * 24 * 60 + timeRemaining.hours * 60 + timeRemaining.minutes} minut</p>
        <p>Czyli:</p>
        <p>{timeRemaining.days * 24 * 3600 + timeRemaining.hours * 3600 + timeRemaining.minutes * 60 + timeRemaining.seconds} sekund</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
