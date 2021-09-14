import React, {FC} from "react";
import { fetchCityForecast } from '../../apiCalls'

interface HomeLocationProps {
  cities: string[];
}

const HomeLocationCards: FC<HomeLocationProps> = ({ cities }) => {
  console.log('cities', cities)
const fetchedCities = cities.map(city => fetchCityForecast(city))

console.log('fetched cities', fetchedCities)
    return (
      <div>
        <body>
          <h2>{fetchedCities}</h2>
        </body>
      </div>
    );
  }


export default HomeLocationCards;
