import { WeatherLocation, Forecast } from "../../model/Weather";
import "./TodaysForecastDetails.css";
import { FC } from "react";
import Loader from "../Loader/Loader";

interface TodaysDetailsProps {
  details: Forecast | null;
  clickedCard: WeatherLocation | null;
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({
  details,
  clickedCard,
}) => {
  if (details && clickedCard) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = details.current;
    const { description } = details.current.weather[0];

    var date = new Date(dt * 1000);
    var convertedDate = date.toString().split(" ").slice(0, 4).join(" ");

    const timeConvert = (sun: number) => {
      let newTime: string = new Date(sun * 1000).toLocaleString();
      let stamp = newTime.split(" ")[2];
      let editTime = newTime.split(" ")[1];
      if (editTime.length === 7) {
        return newTime.split(" ")[1].split("").slice(0, 4).join("") + stamp;
      } else {
        return newTime.split(" ")[1].split("").slice(0, 5).join("") + stamp;
      }
    };

    return (
      <div>
        <section className="todays-container">
          <article className="todays-details">
            <h1 className="todays-header">
              Detailed forecast for {clickedCard.name}
            </h1>
            <h2 className="converted-date">{convertedDate}</h2>
            <section className="column-section">
              <div className="left">
                <p className="curr-temp">{temp.toFixed(0)}&deg;F</p>
                <p className="high low">
                  hi {clickedCard.main.temp_max.toFixed(0)}&deg;F lo{" "}
                  {clickedCard.main.temp_min.toFixed(0)}&deg;F
                </p>
                <p className="feels-like-temp">
                  FEELS LIKE {feels_like.toFixed(0)}&deg;F
                </p>
                <p className="descrip">STATUS: {description.toUpperCase()}</p>
                <p className="humidity">HUMIDITY: {humidity}%</p>
                <p className="sunrise">SUNRISE: {timeConvert(sunrise)}</p>
                <p className="sunset">SUNSET: {timeConvert(sunset)}</p>
              </div>
              <div className="right">
                <section className="hourly-forecast">
                  <img
                    src={`http://openweathermap.org/img/wn/${details.hourly[0].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <ul>
                    <li>Time</li>
                    <li>{timeConvert(details.hourly[0].dt)}</li>
                    <li>Temp</li>
                    <li>{details.hourly[0].temp.toFixed(0)}&deg;F</li>
                  </ul>
                </section>
                <section className="hourly-forecast">
                  <img
                    src={`http://openweathermap.org/img/wn/${details.hourly[1].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <ul>
                    <li>Time</li>
                    <li>{timeConvert(details.hourly[1].dt)}</li>
                    <li>Temp</li>
                    <li>{details.hourly[1].temp.toFixed(0)}&deg;F</li>
                  </ul>
                </section>
                <section className="hourly-forecast">
                  <img
                    src={`http://openweathermap.org/img/wn/${details.hourly[2].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <ul>
                    <li>Time</li>
                    <li>{timeConvert(details.hourly[2].dt)}</li>
                    <li>Temp</li>
                    <li>{details.hourly[2].temp.toFixed(0)}&deg;F</li>
                  </ul>
                </section>
                <section className="hourly-forecast">
                  <img
                    src={`http://openweathermap.org/img/wn/${details.hourly[3].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <ul>
                    <li>Time</li>
                    <li>{timeConvert(details.hourly[3].dt)}</li>
                    <li>Temp</li>
                    <li>{details.hourly[3].temp.toFixed(0)}&deg;F</li>
                  </ul>
                </section>
                <section className="hourly-forecast">
                  <img
                    src={`http://openweathermap.org/img/wn/${details.hourly[4].weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <ul>
                    <li>Time</li>
                    <li>{timeConvert(details.hourly[4].dt)}</li>
                    <li>Temp</li>
                    <li>{details.hourly[4].temp.toFixed(0)}&deg;F</li>
                  </ul>
                </section>
              </div>
            </section>
          </article>
        </section>
      </div>
    );
  }
  return <Loader header={""} />;
};

export default TodaysForecastDetails;
