import React, {FC} from "react";
import { WeatherLocation } from "../../model/Weather";
import HomeCard from "../HomeCard/HomeCard"

interface HomeCityProps {
  allCities: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (city: WeatherLocation) => void;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, current, onSelect }) => {
  const cityCards = allCities.map(city => {
    return (
      <HomeCard
        key={city.id}
        onSelect={() => onSelect(city)}
        passedCity={city}
        name={city.name}
        hi={city.main.temp_max}
        lo={city.main.temp_min}
        description={city.weather[0].description}
        icon={city.weather[0].icon}

      />
    );
  });
  return <div className="cities-area">{[cityCards]}</div>;
};


export default HomeCityCards;
