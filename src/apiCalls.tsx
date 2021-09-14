import {WeatherLocation} from './model/Weather';

const baseURL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "bd1b2da0970838af00f1dddfa1582f13";

export async function fetchCityForecast(term: string): Promise<WeatherLocation | undefined>
{
  const result = await fetch(`${baseURL}forecast?q=${term}&appid=${apiKey}`)

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error('Failed to read location data');

  if (result.status === 200) return await result.json()
};