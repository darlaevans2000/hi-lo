import React, {FC} from "react";
import { Forecast } from "../../model/Weather";

interface FiveDayForecastCardContainerProps {
  fiveDayDetails : Forecast | null
}

export const FiveDayForecastCardContainer: FC<FiveDayForecastCardContainerProps> = ( {fiveDayDetails} ) => {
    console.log("5 day details", fiveDayDetails)
  if (fiveDayDetails) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = fiveDayDetails.current
    const { id, main, description, icon } = fiveDayDetails.current.weather[0]
    return (
      <>
      <p>DAY {humidity}</p>
      </>
    )
  } else {
    return (
      null
    )
  }
}


export default FiveDayForecastCardContainer;
