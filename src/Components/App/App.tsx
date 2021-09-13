import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header'
import { fetchCityForecast, fetchHomePageForecasts } from '../../apiCalls'

function App() {

  const [cityInput, setCityInput] = useState('')
  const disableSearch = cityInput.trim() === '';
  
  const [homeLocations, setHomeLocations] = useState([])

  useEffect(() => {
    fetchCityForecast(cityInput)
  }, [cityInput])

  /*useEffect(() => {
    const phoenix = fetchHomePageForecasts('Phoenix')
    const losAngeles = fetchHomePageForecasts('Los Angeles')
    const newYorkCity = fetchHomePageForecasts('New York City')
    const denver = fetchHomePageForecasts('Denver')

  }, [homeLocations])*/


  return (
    <div className="App">
      <Header />
      <form>
        Search Location <input type='text' value={cityInput} onChange={e => setCityInput(e.target.value)}/>
        <button disabled={disableSearch}>Search</button>
      </form>
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
