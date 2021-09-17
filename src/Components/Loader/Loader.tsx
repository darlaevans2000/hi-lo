import { FC } from 'react';
// import { WeatherLocation } from "../../model/Weather";

import './Loader.css'

interface LoaderProps {
  header: string;
}

export const Loader: FC<LoaderProps> = () => {
    return  (
        <h2 className='loading'>loading weather data...🌤</h2>
    )
}

export default Loader;
