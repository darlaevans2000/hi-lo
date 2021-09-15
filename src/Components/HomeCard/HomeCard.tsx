import { WeatherLocation } from "../../model/Weather";

interface HomeCardProps {
  onSelect: (city: WeatherLocation)
}

const HomeCard = ({ onSelect}) => {
  return (
    <div key={city.id} className="city-card" onClick={() => onSelect(city)}>
        <h2>{city.name}</h2>
        <h3>Today</h3>
        <h4>Hi:</h4>
        <p>{city.main.temp_min}</p>
        <h4>Lo:</h4>
        <p>{city.main.temp_max}</p>
        <h4>Weather Status:</h4>
        <p>{city.weather[0].description} </p>
        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="Weather"></img>
    </div>
  )
}
