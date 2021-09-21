import { useState, FC, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import HomeCityCards from "../HomeCityCards/HomeCityCards";
import Error from "../Error/Error"
import { fetchCityForecast, fetchForecastDetails } from "../../apiCalls";
import { WeatherLocation, Coordinates, Forecast } from "../../model/Weather";
import { Route, Switch } from "react-router-dom";
import TodaysForecastDetails from "../TodaysForecastDetails/TodaysForecastDetails";
import FiveDayForecastCardContainer from "../FiveDayForecastCardContainer/FiveDayForecastCardContainer";

const App: FC = () => {
  const [cities, setCities] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [currentCity, setCurrentCity] = useState<WeatherLocation | null>(null);
  const [forecastDetails, setForecastDetails] = useState<Forecast | null>(null);

  const resetAlerts = () => {
    setError("");
    setWarning("");
  };

  let addCity = async (cityName: string) => {
    resetAlerts();
    const fetchedCity = await fetchCityForecast(cityName);

    if (!fetchedCity) {
      setError(`No location found called '${cityName}'`);
    } else if (cities.find((city) => city.id === fetchedCity.id)) {
      setWarning(`Location '${cityName}' is already in the list.`);
    } else {
      setCities([fetchedCity, ...cities]);
      setStorage(fetchedCity.id, fetchedCity)
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

  useEffect(() => {
    let values = Object.keys(localStorage)
    return values.forEach(value => {
      let cityValue: any = localStorage.getItem(`${value}`)
      let parsedCity = JSON.parse(cityValue)
      setCities([parsedCity, ...cities])
      cities.push(parsedCity)
    })
  },[])

  let deleteCity = (id: number) => {
    const filteredCity: any = cities.find(city => city.id === id)
    localStorage.removeItem(filteredCity.id)
    deleteDisplay(id)
  }

  let deleteDisplay = (id: number) => {
    const filteredCities: any = cities.filter(city => city.id !== id)
    setCities(filteredCities)
  }

  let setStorage = (id: number, city: any) => {
    let stringifiedCity = JSON.stringify(city)
    localStorage.setItem(`${id}`, stringifiedCity)
  }

  return (
    <div className="App">
    <Switch>
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
                    deleteCity={deleteCity}
                  />
                )}
              </main>
            </>
          );
        }}
      />
      <Route
        exact
        path="/hi-lo/cities/:name"
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
     <Route path="*" render={() => <Error />}/>
    </Switch>
    </div>
  );
};

export default App;
