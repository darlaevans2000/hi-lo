import React, {FC} from "react";
import './HomeCard.css'
import { WeatherLocation, Forecast } from "../../model/Weather";

interface HomeCardProps {
  key: number;
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation;
  details: Forecast | null;
  name: string;
  hi: number;
  lo: number;
  description: string;
  icon: string;
}

const HomeCard : FC<HomeCardProps> = ({ key, onSelect, clickedCard, details, name, hi, lo, description, icon}) => {
  return (
    <div key={key} className="city-card" onClick={() => onSelect(clickedCard)} >
        <h2 className='city-name'>{name}</h2>
        <h3 className='today'>Today</h3>
          <p className='hi-lo'>Hi: {hi.toFixed(0)}&deg; | Lo: {lo.toFixed(0)}&deg; </p>

        <h3 className='status'>status: <br/>{description}</h3>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Forecast Icon"></img>
    </div>
  )
}


export default HomeCard;
