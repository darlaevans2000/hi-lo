import { WeatherLocation, Forecast } from "../../model/Weather";
import './TodaysForecastDetails.css'
import React, {FC} from "react";

interface TodaysDetailsProps {
  details : Forecast | null;
  clickedCard: WeatherLocation | null;
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({ details, clickedCard }) => {

  if (details && clickedCard) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = details.current
    const { id, main, description, icon } = details.current.weather[0]

    //move below helper functions to cleanData file?
    var date = new Date(1631817521 * 1000)
    var convertedDate = date.toString().split(" ").slice(0, 4).join(" ")

    const sunConvert = (sun: number) => {
      let newTime: string = new Date(sun * 1000).toLocaleString()
      let editTime = newTime.split(' ')[1].split('').slice(0, 4).join('')
      return editTime
    }

    return (
      <section className='todays-container'>
        <article className='todays-details'>
          <h1 className='todays-header'>Detailed forecast for {clickedCard.name}</h1>
          <h2>{convertedDate}</h2>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
          <div className='temps'>
            <p className='curr-temp'>CURRENTLY: {temp}&deg;</p>
            <p className='feels-like-temp'>FEELS LIKE: {feels_like.toFixed(0)}&deg;</p>
          </div>
          <div className='humid-descrip'>
            <p className='humidity'>HUMIDITIY: {humidity}%</p>
            <p className='descrip'>{description.toUpperCase()}</p>
          </div>
          <div className='sunrise-set'>
            <p className='sunrise'>SUNRISE: {sunConvert(sunrise)}am</p>
            <p className='sunset'>SUNSET: {sunConvert(sunset)}pm</p>
          </div>
        </article>
      </section>
    )
  }
  return null;
}



export default TodaysForecastDetails
