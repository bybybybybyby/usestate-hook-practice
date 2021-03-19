import React from "react";

function App() {
  const [time, updateTime] = React.useState(new Date().toLocaleTimeString());

  function getTime() {
    updateTime(new Date().toLocaleTimeString());
    console.log(time);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
