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
