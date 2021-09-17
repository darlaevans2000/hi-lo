import { WeatherLocation } from './model/Weather';
import { Forecast } from './model/Weather';

const baseURL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "bd1b2da0970838af00f1dddfa1582f13";

export async function fetchCityForecast(cityName: string): Promise<WeatherLocation | undefined>
{
  const result = await fetch(`${baseURL}weather?q=${cityName}&units=imperial&appid=${apiKey}`)

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error('Failed to read location data');

  if (result.status === 200) return await result.json()
};

const baseURL2 = "https://api.openweathermap.org/data/2.5/onecall?";

export async function fetchForecastDetails(lat: string, lon: string): Promise<Forecast | undefined>
{
  const result = await fetch(`${baseURL2}lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${apiKey}`)
  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error('Failed to read location data');
  if (result.status === 200) return await result.json()
};
