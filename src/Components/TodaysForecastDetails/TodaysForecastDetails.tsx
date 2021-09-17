import { Forecast } from "../../model/Weather";
import React, {FC} from "react";


interface TodaysDetailsProps {
  details : Forecast | null
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({ details }) => {
  console.log("Details", details)

  if (details) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = details.current
    const { id, main, description, icon } = details.current.weather[0]
    return (
      <>
      <h1>Today CITY WEATHER DETAILS </h1>
      </>
    )
  } else {
    return (
      null
    )
  }
}



export default TodaysForecastDetails
