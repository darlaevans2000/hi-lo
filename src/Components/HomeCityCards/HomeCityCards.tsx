import React, {FC} from "react";
import { WeatherLocation } from "../../model/Weather";
import HomeCityCard from "../HomeCityCard/HomeCityCard"

interface HomeCityProps {
  allCities: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (city: WeatherLocation) => void;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, onSelect }) => {
  const cityCards = allCities.map(city => {
    return (
      <div className="city-card" onClick={() => onSelect(city)}>
          <p>{city.name}</p>
          <p>{city.main.temp_max}</p>
          <p>{city.main.temp_min}</p>
      </div> 
    );
  });
  return <div className="cities-area">{[cityCards]}</div>;
};


export default HomeCityCards;
