import React, { useState } from "react";

var timeStarted = false;

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, updateTime] = useState(now);

  function getTime() {
    console.log("IN GETTIME");
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  // Get time every 1 second.
  if (!timeStarted) {
    timeStarted = true;
    setInterval(getTime, 1000);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
