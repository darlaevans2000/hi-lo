import { WeatherLocation } from "./model/Weather";
import { Forecast } from "./model/Weather";
import { cleanFiveDayForecastData, cleanCurrentWeatherData } from "./utils.js";

const baseURL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "dc464d940e53a603d97ca8d66b0afd96";

export async function fetchCityForecast(
  cityName: string
): Promise<WeatherLocation | undefined> {
  const result = await fetch(`${baseURL}weather?q=${cityName}&appid=${apiKey}`);

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error("Failed to read location data");

  if (result.status === 200) {
    const newResult = await result.json();
    return cleanCurrentWeatherData(newResult);
  }
}

const baseURL2 = "https://api.openweathermap.org/data/2.5/onecall?";

export async function fetchForecastDetails(
  lat: string,
  lon: string
): Promise<Forecast | undefined> {
  const result = await fetch(
    `${baseURL2}lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`
  );

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error("Failed to read location data");
  if (result.status === 200) {
    const newResult = await result.json();
    return cleanFiveDayForecastData(newResult);
  }
}
