import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> // h1 app - HiLo
      <Form /> // search bar for finding cities by name or zip, displayed just on homepage
      <CityForecastContainer /> <CityForecastCard />
        //   --> more detailed weather info for today's date
        //Denver, LA, NY, Phoenix daily weather forecast (displayed on homepage ) CityForecastCard

      <DetailedForecastContainer /> <DetailedForecastCard />
      // within CityForecastContainer will have DetailedForecastContainer (movieDetails) --> 5 day forecast details with back button
      // DetailedForecastContainer holds DailyCards for each day?

    </div>
  );
}

export default App;
