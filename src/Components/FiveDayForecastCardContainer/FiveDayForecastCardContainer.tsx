import React, {FC} from "react";
import { Forecast } from "../../model/Weather";
import FiveDayForecastCard from "../FiveDayForecastCard/FiveDayForecastCard"

interface FiveDayForecastCardContainerProps {
  fiveDayDetails : Forecast | null
}

export const FiveDayForecastCardContainer: FC<FiveDayForecastCardContainerProps> = ( {fiveDayDetails} ) => {
  if (fiveDayDetails) {
    const { dt, feels_like, humidity, sunrise, sunset, temp } = fiveDayDetails.current
    const { id, main, description, icon } = fiveDayDetails.current.weather[0]
    const dailyArray = fiveDayDetails.daily

    return (
      <>
      <FiveDayForecastCard
        key={id}
        temp={temp}
        days={fiveDayDetails}
      />
      </>
    )
  }
  return null;
}


export default FiveDayForecastCardContainer;
