import { FC } from "react";
import "./HomeCard.css";
import { WeatherLocation, Forecast } from "../../model/Weather";
import { NavLink } from "react-router-dom";

interface HomeCardProps {
  id: number;
  onSelect: (city: WeatherLocation) => void;
  clickedCard: WeatherLocation;
  details: Forecast | null;
  name: string;
  hi: number;
  lo: number;
  description: string;
  icon: string;
  deleteCity: (id: number) => void;
}

const HomeCard: FC<HomeCardProps> = ({
  id,
  onSelect,
  clickedCard,
  name,
  hi,
  lo,
  description,
  icon,
  deleteCity,
}) => {
  return (
    <>
      <div className="city-card" onClick={() => onSelect(clickedCard)}>
        <h2 className="city-name">{name}</h2>
        <h3 className="today">Today</h3>
        <p className="hi-lo">
          Hi: {hi.toFixed(0)}&deg; | Lo: {lo.toFixed(0)}&deg;{" "}
        </p>

        <h3 className="status">
          status: <br />
          {description}
        </h3>
        <img
          className="card-img"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Forecast Icon"
        ></img>
      </div>
      <NavLink to={"/hi-lo/"} className="delete-link">
        <button className="delete-btn" onClick={() => deleteCity(id)}>
          &times;
        </button>
      </NavLink>
    </>
  );
};

export default HomeCard;
