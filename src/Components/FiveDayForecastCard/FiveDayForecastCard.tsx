import React, {FC} from "react";
import { Forecast, DailyForecast } from "../../model/Weather";
import './FiveDayForecastCard.css'

interface FiveDayForecastCardProps {
  key: number;
  temp: number;
  days: Forecast | null;
}

export const FiveDayForecastCard: FC<FiveDayForecastCardProps> = ({ key, temp, days }) => {
  if (days) {
    return (
      <>
      <h4 className='fiveday-title'>the upcoming days..</h4>
      <section className="all-days">
        <section className="day-two">
          <p className="day-two-date">{days.daily[1].dt}</p>
          <img className="day-two-icon" src={`http://openweathermap.org/img/wn/${days.daily[1].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
          <p className="day-two-hi">{days.daily[1].temp.max}°F</p>
          <p className="day-two-lo">{days.daily[1].temp.min}°F</p>
        </section>
        <section className="day-three">
          <p className="day-three-date">{days.daily[2].dt}</p>
          <img className="day-three-icon" src={`http://openweathermap.org/img/wn/${days.daily[2].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
          <p className="day-three-hi">{days.daily[2].temp.max}°F</p>
          <p className="day-three-lo">{days.daily[2].temp.min}°F</p>
        </section>
        <section className="day-four">
          <p className="day-four-date">{days.daily[3].dt}</p>
          <img className="day-four-icon" src={`http://openweathermap.org/img/wn/${days.daily[3].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
          <p className="day-four-hi">{days.daily[3].temp.max}°F</p>
          <p className="day-four-lo">{days.daily[3].temp.min}°F</p>
        </section>
        <section className="day-five">
          <p className="day-five-date">{days.daily[4].dt}</p>
          <img className="day-five-icon" src={`http://openweathermap.org/img/wn/${days.daily[4].weather[0].icon}@2x.png`} alt="Weather Icon"></img>
          <p className="day-five-hi">{days.daily[4].temp.max}°F</p>
          <p className="day-five-lo">{days.daily[4].temp.min}°F</p>
        </section>
      </section>
      </>
    )
  }
  return null;
}

export default FiveDayForecastCard;
