import { Forecast } from "../../model/Weather";
import './TodaysForecastDetails.css'
import React, {FC} from "react";


interface TodaysDetailsProps {
  details : Forecast | null
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({ details }) => {
  console.log("Details", details)

  if (details) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = details.current
    const { id, main, description, icon } = details.current.weather[0]
    var date = new Date(1631817521 * 1000)
    var convertedDate = date.toString().split(" ").slice(0, 4).join(" ")

    return (
      <section className='todays-container'>
        <h1>Detailed Forecast</h1>
          <article className='todays-details'>
            <p>{convertedDate}</p>
            <p>{feels_like}</p>
            <p>{humidity}</p>
            <p>{temp}</p>
          </article>
      </section>
    )
  }
  return null;
}



export default TodaysForecastDetails
