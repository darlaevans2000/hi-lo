import React, {FC} from "react";
import './HomeCard.css'
import { WeatherLocation, Forecast } from "../../model/Weather";

interface HomeCardProps {
  key: number;
  onSelect: (city: WeatherLocation) => void;
  current: WeatherLocation;
  details: Forecast | null;
  name: string;
  hi: number;
  lo: number;
  description: string;
  icon: string;
}

const HomeCard : FC<HomeCardProps> = ({ key, onSelect, current, details, name, hi, lo, description, icon}) => {
  return (
    <div key={key} className="city-card" onClick={() => onSelect(current)}>
        <h2>{name}</h2>
        <h3>Today</h3>
        <h4>Hi:</h4>
        <p>{hi.toFixed(0)}</p>
        <h4>Lo:</h4>
        <p>{lo.toFixed(0)}</p>
        <h4>Weather Status:</h4>
        <p>{description} </p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather"></img>
    </div>
  )
}


export default HomeCard;
