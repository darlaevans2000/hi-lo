import { FC } from "react";
import "./HomeCityCards.css";

import { WeatherLocation, Forecast } from "../../model/Weather";
import HomeCard from "../HomeCard/HomeCard";
import { NavLink } from "react-router-dom";

interface HomeCityProps {
  allCities: WeatherLocation[];
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation | null;
  details: Forecast | null;
  deleteCity: (id: number) => void;
}

export const HomeCityCards: FC<HomeCityProps> = ({
  allCities,
  onSelect,
  details,
  deleteCity,
}) => {
  const cityCards = allCities.map((city) => {
    return (
      <NavLink className="card-link" to={`/hi-lo/cities/${city.name}`}>
        <HomeCard
          key={city.id}
          id={city.id}
          onSelect={() => onSelect(city)}
          clickedCard={city}
          details={details}
          name={city.name}
          hi={city.main.temp_max}
          lo={city.main.temp_min}
          description={city.weather[0].description}
          icon={city.weather[0].icon}
          deleteCity={deleteCity}
        />
      </NavLink>
    );
  });
  return <div className="cities-container">{cityCards}</div>;
};

export default HomeCityCards;
