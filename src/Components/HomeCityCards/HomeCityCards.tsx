import React, {FC} from "react";
import './HomeCityCards.css'

import { WeatherLocation, Forecast } from "../../model/Weather";
import HomeCard from "../HomeCard/HomeCard"
import { NavLink } from 'react-router-dom';
import { getState } from '../../utils.js'

interface HomeCityProps {
  allCities: WeatherLocation[];
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation | null;
  details: Forecast | null;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, onSelect, clickedCard, details }) => {
console.log('forecast details', details)
console.log('all cities', allCities)
const cityCards = allCities.map(city => {
  console.log(getState(city.coord))

    return (
      <NavLink className='card-link' to={`/hi-lo/${city.name}`}>
        <HomeCard
          key={city.id}
          onSelect={() => onSelect(city)}
          clickedCard={city}
          details={details}
          name={city.name}
          hi={city.main.temp_max}
          lo={city.main.temp_min}
          description={city.weather[0].description}
          icon={city.weather[0].icon}
        />
      </NavLink>
    );
  });
  return <div className="cities-container">{cityCards}</div>;
};


export default HomeCityCards;
