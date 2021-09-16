describe('User Movie Area Flows', () => {
    beforeEach(() => {
    cy.loadHomePage();
  });

  describe('Main Page Render', () => {

  it('Should have a header with text Hi-Lo Weather on load', () => {
    cy.get('h1').contains('hi-lo weather ☀️')
  });
  
  it("Should display a search bar with a text input for city name", () => {
    cy.get("form")
      .get('*[class^="search-by-city"]')
  });

  it("Should allow user to type in search bar and see that cities weather by clicking the submit button", () => {
      cy.addCityWeatherCard()
    cy.get("form")
      .get('*[class^="search-by-city"]')
      .type("Denver")
      .should("have.value", "Denver")
      cy.get('*[class^="search-btn"]').click()
    // cy.get('*[class^="cities-container"]').find('*[class^="city-card"]').should("have.length", 1).contains("Denver");
  });


  });
});