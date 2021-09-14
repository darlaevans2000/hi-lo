import React, {FC} from "react";
import { WeatherLocation } from "../../model/Weather";
import HomeCityCard from "../HomeCityCard/HomeCityCard"

interface HomeCityProps {
  allCities: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (allCities: WeatherLocation) => void;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities }) => {
  const cityCards = allCities.map(city => {
    return (
      <HomeCityCard
        cityName={city.name}
        cityHi={city.main.temp_max}
        cityLo={city.main.temp_min}
      />
    );
  });
  return <div className="cities-area">{[cityCards]}</div>;
};


export default HomeCityCards;
