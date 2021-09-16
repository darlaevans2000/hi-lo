import React, { useState, FC } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import HomeCityCards from '../HomeCityCards/HomeCityCards'
import { fetchCityForecast, fetchForecastDetails } from '../../apiCalls'
import { WeatherLocation } from "../../model/Weather";
import { Forecast } from '../../model/Weather'
import { Route } from 'react-router-dom';
import TodaysForecastDetails from '../TodaysForecastDetails/TodaysForecastDetails'

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
    <Route exact path="/" render={() => {
      return (
        <>
        <Header />
        <main className='main'>
          <Form onSearch={addCity}/>
          {error ? <div className={"error"}>{error}</div> : null}
          {warning ? <div className={"warning"}>{warning}</div> : null}

          {!cities.length ? <h2 className='no-city'>No forecasts to show</h2> : <HomeCityCards
            allCities={cities}
            onSelect={city => {
              setCurrentCity(city)
              setDetails(city)
            }}
            clickedCard={currentCity}
            details={forecastDetails}
          />}
        </main>
        </>
      )
    }} />
    <Route exact path="/:name" render={({ match }) => {
      const { params } = match
      return (
        <main className='details'>
          <Header />
          <TodaysForecastDetails
          details={forecastDetails}
          />

        </main>
      )
    }} />
    </div>
  );
}


export default App;
