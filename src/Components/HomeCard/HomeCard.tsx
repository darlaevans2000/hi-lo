import React, {FC} from "react";
import { WeatherLocation } from "../../model/Weather";

interface HomeCardProps {
  id: number;
  onSelect: (city: WeatherLocation) => void;
  name: string;
  hi: number;
  lo: number;
  description: string;
  icon: string;
}

const HomeCard : FC<HomeCardProps> = ({ id, onSelect, name, hi, lo, description, icon}) => {
  return (
    <div key={id} className="city-card" onClick={() => onSelect(city)}>
        <h2>{name}</h2>
        <h3>Today</h3>
        <h4>Hi:</h4>
        <p>{lo}</p>
        <h4>Lo:</h4>
        <p>{hi}</p>
        <h4>Weather Status:</h4>
        <p>{description} </p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather"></img>
    </div>
  )
}


export default HomeCard;
