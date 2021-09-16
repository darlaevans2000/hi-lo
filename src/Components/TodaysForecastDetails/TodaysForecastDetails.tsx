import { Forecast } from "../../model/Weather";
import React, {FC} from "react";


interface TodaysDetailsProps {
  details : Forecast | null
}

export const TodaysForecastDetails: FC<TodaysDetailsProps> = ({ details }) => {
  return (
    <>
    <h1>Today CITY WEATHER DETAILS</h1>
    </>
  )
}



export default TodaysForecastDetails
