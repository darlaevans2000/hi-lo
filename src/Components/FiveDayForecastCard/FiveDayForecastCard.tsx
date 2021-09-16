import React, {FC} from "react";
import { Forecast } from "../../model/Weather";

interface FiveDayForecastCardProps {
  key: number;
  temp: number;
  dayTwo: {
    humidity: number;
    temp: {
      max: number;
      min: number;
    }
    uvi: number;
    weather: [{
      description: string;
      icon: string;
    }]
  }
}

export const FiveDayForecastCard: FC<FiveDayForecastCardProps> = ({ key, temp, dayTwo, dayThree, dayFour, dayFive}) => {
  return (
    <>
      <p>CARD TEMP:{temp}</p>
    </>
  )
}






export default FiveDayForecastCard;
