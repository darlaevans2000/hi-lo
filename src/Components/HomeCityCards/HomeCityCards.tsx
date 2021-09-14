import React, {FC} from "react";
import { WeatherLocation } from "../../model/Weather";

interface HomeCityProps {
  allCities: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (allCities: WeatherLocation) => void;
}

export const HomeCityCards: FC<HomeCityProps> = ({ allCities, onSelect, current }) => {
return (
<section className="card-area">
        {allCities.map(city =>
        <li key={city.id}
            onClick={() => onSelect(city)}>
          <h2>{city.name}</h2>
        </li>
      )}
  </section>
  )};


export default HomeCityCards;
