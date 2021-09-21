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
   data.hourly.forEach((hour, i) => {
      const newTemp = Math.round(((((hour.temp) - 273.15) * 1.8)) + 32);
      hour.temp = newTemp;

})
  data.current.temp = Math.round(((((data.current.temp) - 273.15) * 1.8)) + 32)
  data.current.feels_like = Math.round(((((data.current.feels_like) - 273.15) * 1.8)) + 32)
return data
}
