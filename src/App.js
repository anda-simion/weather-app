import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherForecastDisplay from './components/WeatherForecastDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Weather</p>
      <WeatherForm />
      <WeatherForecastDisplay />
    </div>
  );
}

export default App;
