export const cleanCurrentWeatherData = (data) => {
    data.main.temp_max = Math.round(((((data.main.temp_max) - 273.15) * 1.8)) + 32);
    data.main.temp_min = Math.round(((((data.main.temp_min) - 273.15) * 1.8)) + 32);
  return data
}

export const cleanFiveDayForecastData = (data) => {
  data.daily.forEach((day, i) => {
    if (i > 0) {
     const newDate = (new Date(day.dt * 1000)).toString().split(" ").slice(0, 1).join(" ").toUpperCase();
     const newHiTemp = Math.round(((((day.temp.max) - 273.15) * 1.8)) + 32);
     const newLowTemp = Math.round(((((day.temp.min) - 273.15) * 1.8)) + 32);
     day.dt = newDate;
     day.temp.max = newHiTemp;
     day.temp.min = newLowTemp;
   }
   })
  return data
}

/*export const cleanCurrentWeatherData = (data) => {
  if (Array.isArray(data)) {
    data.forEach((city) => {
      const newCurrentHiTemp = Math.round(((((city.main.temp_max) - 273.15) * 1.8)) + 32);
      city.main.temp_max = newCurrentHiTemp
      const newCurrentLoTemp = Math.round(((((city.main.temp_min) - 273.15) * 1.8)) + 32);
      city.main.temp_min = newCurrentHiTemp
    })
  } else {
    data.main.temp_max = Math.round(((((data.main.temp_max) - 273.15) * 1.8)) + 32);
    data.main.temp_min = Math.round(((((data.main.temp_min) - 273.15) * 1.8)) + 32);
  }
  return data
} */
