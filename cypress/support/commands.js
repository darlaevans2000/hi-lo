import denverData from '../fixtures/denver-data.json';
import denverForecastData from '../fixtures/denver-forecast-data.json';

Cypress.Commands.add('loadHomePage', () => {
    cy.visit('http://localhost:3000/hi-lo')
})


Cypress.Commands.add('addCityWeatherCard', () => {
        cy.intercept('GET', "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=dc464d940e53a603d97ca8d66b0afd96",
        {
            statusCode: 200,
            body: denverData
        })
});

Cypress.Commands.add('loadSingleCityWeatherForecast', () => {
    cy.visit('http://localhost:3000/hi-lo/cities/Denver')
        cy.intercept('GET', "https://api.openweathermap.org/data/2.5/onecall?lat=39.7392&lon=-104.9847&exclude=minutely&appid=dc464d940e53a603d97ca8d66b0afd96",
        {
            statusCode: 200,
            body: denverForecastData
        })
});
