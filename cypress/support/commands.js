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


import denverData from '../fixtures/denver-data';

Cypress.Commands.add('loadHomePage', () => {
    cy.intercept('https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=dc464d940e53a603d97ca8d66b0afd96', denverData[0])
    cy.visit('http://localhost:3000/hi-lo')
})


Cypress.Commands.add('addCityWeatherCard', () => {
  cy.intercept('https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=dc464d940e53a603d97ca8d66b0afd96', denverData[0])
});