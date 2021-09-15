import React, {FC} from "react";
import { WeatherLocation, Forecast } from "../../model/Weather";
import HomeCard from "../HomeCard/HomeCard"

interface HomeCityProps {
  allCities: WeatherLocation[];
  onSelect: (city: WeatherLocation) => void;
  current: WeatherLocation | null;
  details: Forecast | null;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, onSelect, current, details }) => {
console.log('forecast details', details)

  const cityCards = allCities.map(city => {
    return (
      <HomeCard
        key={city.id}
        onSelect={() => onSelect(city)}
        current={city}
        details={details}
        name={city.name}
        hi={city.main.temp_max}
        lo={city.main.temp_min}
        description={city.weather[0].description}
        icon={city.weather[0].icon}
      />
    );
  });
  return <div className="cities-area">{cityCards}</div>;
};


export default HomeCityCards;
