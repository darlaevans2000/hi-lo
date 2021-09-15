import React, { useState, FC } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import HomeCityCards from '../HomeCityCards/HomeCityCards'
import { fetchCityForecast, fetchForecastDetails } from '../../apiCalls'
import { WeatherLocation } from "../../model/Weather";
import { Forecast } from '../../model/Weather'

const App: FC = () => {
  const [cities, setCities] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [currentCity, setCurrentCity] = useState<WeatherLocation | null>(null);
  const [forecastDetails, setForecastDetails] = useState<Forecast | null>(null);

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addCity = async (cityName: string) => {
    resetAlerts();
    const fetchedCity = await fetchCityForecast(cityName);

    if (!fetchedCity) {
      setError(`No location found called '${cityName}'`);
    } else if (cities.find(city => city.id === fetchedCity.id)) {
      setWarning(`Location '${cityName}' is already in the list.`);
    } else {
      setCities([fetchedCity, ...cities]);
    }
  };

  let setDetails = async (currentCity: WeatherLocation) => {
    const lat = currentCity.coord.lat.toString()
    const lon = currentCity.coord.lon.toString()
    const fetchedDetails = await fetchForecastDetails(lat, lon)

    if (fetchedDetails) {
      setForecastDetails(fetchedDetails)
    }
  }


  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Form onSearch={addCity}/>
        {error ? <div className={"error"}>{error}</div> : null}
        {warning ? <div className={"warning"}>{warning}</div> : null}

        {!cities.length ? <h2>No city forecasts to show</h2> : <HomeCityCards
          allCities={cities}
          onSelect={city => {
            setCurrentCity(city)
            setDetails(city)
          }}
          current={currentCity}
          details={forecastDetails}
        />}
      </main>
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
