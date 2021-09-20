// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import allMoviesData from '../fixtures/movies-data.json';
// import movieInfoData from '../fixtures/movie-info-data.json';


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
    cy.visit('http://localhost:3000/hi-lo/Denver')
        cy.intercept('GET', "https://api.openweathermap.org/data/2.5/onecall?lat=39.7392&lon=-104.9847&exclude=minutely&appid=dc464d940e53a603d97ca8d66b0afd96", 
        {
            statusCode: 200, 
            body: denverForecastData
        })
});