import React, {FC} from "react";
import { Forecast } from "../../model/Weather";

interface FiveDayForecastCardProps {
  key: number;
  temp: number;
}

export const FiveDayForecastCard: FC<FiveDayForecastCardProps> = ({ key, temp}) => {
  return (
    <>
      <p>CARD TEMP:{temp}</p>
    </>
  )
}






export default FiveDayForecastCard;
