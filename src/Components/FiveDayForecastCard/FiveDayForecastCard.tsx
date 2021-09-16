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
        <p>{(new Date(days.daily[0].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
        <p>{(new Date(days.daily[1].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
        <p>{(new Date(days.daily[2].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>
        <p>{(new Date(days.daily[3].dt * 1000)).toString().split(" ").slice(1, 4).join(" ")}</p>

      </>
    )
  } else {
    return (
      null
    )
  }

}






export default FiveDayForecastCard;
