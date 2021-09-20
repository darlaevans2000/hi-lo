import React, {FC} from "react";
import './HomeCard.css'
import { WeatherLocation, Forecast } from "../../model/Weather";
import { Link } from 'react-router-dom';

interface HomeCardProps {
  key: number;
  id: number;
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation;
  details: Forecast | null;
  name: string;
  hi: number;
  lo: number;
  description: string;
  icon: string;
  stateString: string;
  deleteCity: (id: number) => void;
}

const HomeCard : FC<HomeCardProps> = ({ key, id, onSelect, clickedCard, details, name, hi, lo, description, icon, stateString, deleteCity}) => {
  return (
    <>
      <div key={key} className="city-card" onClick={() => onSelect(clickedCard)} >
          <h2 className='city-name'>{name}, {stateString}</h2>
          <h3 className='today'>Today</h3>
            <p className='hi-lo'>Hi: {hi.toFixed(0)}&deg; | Lo: {lo.toFixed(0)}&deg; </p>

          <h3 className='status'>status: <br/>{description}</h3>
          <img className='card-img' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Forecast Icon"></img>
      </div>
      <Link to={'/hi-lo/'}><button className='delete-btn' onClick={() => deleteCity(id)}>&times;</button></ Link>
    </>
  )
}


export default HomeCard;
