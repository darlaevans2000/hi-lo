import { WeatherLocation, Forecast } from "../../model/Weather";
import './TodaysForecastDetails.css'
import React, {FC} from "react";


interface TodaysDetailsProps {
  details : Forecast | null;
  clickedCard: WeatherLocation | null;
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({ details, clickedCard }) => {
  console.log("Details", details)
  console.log('CLickedCard', clickedCard)

  if (details && clickedCard) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = details.current
    const { id, main, description, icon } = details.current.weather[0]
    var date = new Date(1631817521 * 1000)
    var convertedDate = date.toString().split(" ").slice(0, 4).join(" ")

    return (
      <section className='todays-container'>
        <article className='todays-details'>
            <h1 className='todays-header'>Detailed forecast for {clickedCard.name}</h1>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
          <h2>{convertedDate}</h2>
          <p>{feels_like}</p>
          <p>{humidity}</p>
          <p>{temp}</p>
          <p>{description}</p>
        </article>
      </section>
    )
  }
  return null;
}



export default TodaysForecastDetails
