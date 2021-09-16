import React, {FC} from "react";
import { Forecast, DailyForecast } from "../../model/Weather";

interface FiveDayForecastCardProps {
  key: number;
  temp: number;
  days: Forecast | null;
}

export const FiveDayForecastCard: FC<FiveDayForecastCardProps> = ({ key, temp, days }) => {
  if (days) {
    return (
      <>
      <section className="all-days">
        <section className="day-two">
          <p className="day-two-date">{(new Date(days.daily[1].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
          <p className="day-two-hi">{Math.round(((((days.daily[1].temp.max) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-two-lo">{Math.round(((((days.daily[1].temp.min) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-two-description">{days.daily[1].weather[0].description}</p>
          <img className="day-two-icon" src={`http://openweathermap.org/img/wn/${days.daily[1].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
        </section>
        <section className="day-three">
          <p className="day-three-date">{(new Date(days.daily[2].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
          <p className="day-three-hi">{Math.round(((((days.daily[2].temp.max) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-three-lo">{Math.round(((((days.daily[2].temp.min) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-three-description">{days.daily[2].weather[0].description}</p>
          <img className="day-two-icon" src={`http://openweathermap.org/img/wn/${days.daily[2].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
        </section>
        <section className="day-four">
          <p className="day-four-date">{(new Date(days.daily[3].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
          <p className="day-four-hi">{Math.round(((((days.daily[3].temp.max) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-four-lo">{Math.round(((((days.daily[3].temp.min) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-four-description">{days.daily[3].weather[0].description}</p>
          <img className="day-four-icon" src={`http://openweathermap.org/img/wn/${days.daily[3].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
        </section>
        <section className="day-five">
          <p className="day-five-date">{(new Date(days.daily[4].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
          <p className="day-five-hi">{Math.round(((((days.daily[4].temp.max) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-five-lo">{Math.round(((((days.daily[4].temp.min) - 273.15) * 1.8)) + 32)}</p>
          <p className="day-five-description">{days.daily[4].weather[0].description}</p>
          <img className="day-five-icon" src={`http://openweathermap.org/img/wn/${days.daily[4].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
        </section>
      </section>
      </>
    )
  } else {
    return (
      null
    )
  }

}






export default FiveDayForecastCard;
