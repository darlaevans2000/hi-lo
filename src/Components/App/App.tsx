import React from 'react';
import './App.css';
import Header from '../Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}


export default App;


// <Form /> // search bar for finding cities by name or zip, displayed just on homepage
// <CityForecastContainer /> <CityForecastCard />
  //   --> more detailed weather info for today's date
  //Denver, LA, NY, Phoenix daily weather forecast (displayed on homepage ) CityForecastCard

  // City Forecast Card layout
  // <section>
  //   <h2>City Name<h2>
  //   <img>weather logo</img>
  //   <p>HiTemp</p><p>LowTemp</p> //inline
  //   <p>Chance of Precip</p>
  // </section>

// <DetailedForecastContainer /> <DetailedForecastCard />
// within CityForecastContainer will have DetailedForecastContainer (movieDetails) --> 5 day forecast details with back button
// DetailedForecastContainer holds DailyCards for each day?

// Detailed Forecast Card layout
// <section>
//   <h2>City Name<h2>
//   <img>weather logo</img>
//   <p>Description</p>
//   <ul>
//     <li>HiTemli</li><li>LowTemli</li> //inline
//     <li>Chance of Precili</li>
//     <li>Humidity</li>
//     <li>Feels like Temli</li>
//     <li>Wind Slieed</li>
//     <li>Visibility</li>
//     <li>Sunrise/Sunset
//   </ul>
// </section>
