const baseURL = "https://api.openweathermap.org/data/2.5/";
const apiKey = "dc464d940e53a603d97ca8d66b0afd96";

export const fetchCityForecast = (city: string) => {
    return fetch(`${baseURL}forecast?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then(response => Promise.resolve(response))
      .catch((error) => console.log(error.message));
};

export const fetchHomePageForecasts = (city: string) => {
    return fetch(`${baseURL}forecast?q=${city}&appid=${apiKey}`)
      .then((response) => response.json())
      .then(data => {
        console.log('home page cities', data)
      })
      .catch((error) => console.log(error.message));
};
