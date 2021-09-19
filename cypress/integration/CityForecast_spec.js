describe('City Forecast Info Page Flows', () => {
  beforeEach(() => {
    cy.loadSingleCityWeatherForecast();
  });

describe('Weather Forecast is Loading Status', () => {

    it('Should display a loading message while fetching forecast data', () => {
        cy.get('.loading')
        .should('contain', 'loading weather data')
        .should('be.visible')
    });

  });

  describe('City Forecast Info Display', () => {

    it('Should render todays detailed forecast', () => {
      cy.get('.curr-temp').contains('64')
      cy.get('.feels-like-temp').contains('82')


    });

    it('Should render four day forecast with hi and los', () => {
        cy.get('.day-two-date').contains('MON')
        cy.get('.day-two-hi').contains('77')
        cy.get('.day-two-lo').contains('51')
        cy.get('.day-three-date').contains('TUE')
        cy.get('.day-four-date').contains('WED')
        cy.get('.day-five-date').contains('THU')
    })

  });


});
