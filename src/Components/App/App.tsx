import { useState, FC, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import HomeCityCards from "../HomeCityCards/HomeCityCards";
import { fetchCityForecast, fetchForecastDetails } from "../../apiCalls";
import { WeatherLocation, Coordinates, Forecast } from "../../model/Weather";
import { Route } from "react-router-dom";
import TodaysForecastDetails from "../TodaysForecastDetails/TodaysForecastDetails";
import FiveDayForecastCardContainer from "../FiveDayForecastCardContainer/FiveDayForecastCardContainer";

const App: FC = () => {
  const [cities, setCities] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [currentCity, setCurrentCity] = useState<WeatherLocation | null>(null);
  const [forecastDetails, setForecastDetails] = useState<Forecast | null>(null);
  const [stateStrings, setStateString] = useState<string[]>([]);

  const resetAlerts = () => {
    setError("");
    setWarning("");
  };

  let addCity = async (cityName: string) => {
    resetAlerts();
    const fetchedCity = await fetchCityForecast(cityName);
    let fetchedState = cityName.split(', ')[1]

    if (fetchedState) {
      setStateString([fetchedState, ...stateStrings])
    }

    if (!fetchedCity) {
      setError(`No location found called '${cityName}'`);
    } else if (cities.find((city) => city.id === fetchedCity.id)) {
      setWarning(`Location '${cityName}' is already in the list.`);
    } else {
      setCities([fetchedCity, ...cities]);
    }
  };

  let setDetails = async (coords: Coordinates) => {
    const fetchedDetails = await fetchForecastDetails(
      coords.lat.toString(),
      coords.lon.toString()
    );

    if (!fetchedDetails) {
      setDetails(coords);
    } else {
      setForecastDetails(fetchedDetails);
    }
  };

  return (
    <div className="App">
      <Route
        exact
        path="/hi-lo"
        render={() => {
          return (
            <>
              <Header />
              <main className="main">
                <Form onSearch={addCity} />
                {error ? <div className={"error"}>{error}</div> : null}
                {warning ? <div className={"warning"}>{warning}</div> : null}

                {!cities.length ? (
                  <h2 className="no-city">No forecasts to show</h2>
                ) : (
                  <HomeCityCards
                    allCities={cities}
                    onSelect={(city) => {
                      setCurrentCity(city);
                      setDetails(city.coord);
                    }}
                    clickedCard={currentCity}
                    details={forecastDetails}
                    stateStrings={stateStrings}
                  />
                )}
              </main>
            </>
          );
        }}
      />
      <Route
        exact
        path="/hi-lo/:name"
        render={({ match }) => {
          if (!currentCity && !forecastDetails) {
            addCity(match.params.name);
            if (cities.length >= 1) {
              setCurrentCity(cities[0]);
              setDetails(cities[0].coord);
            }
          } else {
          }
          return (
            <main className="details">
              <Header />
              <TodaysForecastDetails
                details={forecastDetails}
                clickedCard={currentCity}
              />
              <FiveDayForecastCardContainer fiveDayDetails={forecastDetails} />
            </main>
          );
        }}
      />
    </div>
  );
};

export default App;
