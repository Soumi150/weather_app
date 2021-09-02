import React from 'react';
import CurrentWeather from "./components/CurrentWeather";
import './index.css';

function App() {
  return (
    <div className = "App">
      <div className = "cloud">
    <CurrentWeather/>
    </div>
    </div>
  );
}

export default App;
