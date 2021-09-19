describe("User Movie Area Flows", () => {

  describe("Main Page Render", () => {
    //Going to need to stub this data ASAP because the data changes day to day, which would cause an error. Or we can
    // keep it how it is of checking if a card rendered w/ value of city name. (not specific to date data)
    it("Should have a header with text Hi-Lo Weather on load", () => {
      cy.loadHomePage();
      cy.get("h1").contains("hi-lo weather ☀️");
    });

    it("Should display a search bar with a text input for city name", () => {
      cy.get("form").get('*[class^="search-by-city"]');
    });

    it("Should allow user to type in search bar and see that cities weather by clicking the submit button", () => {
      cy.get("form")
        .get('*[class^="my-input"]')
        .type("Denver")
        .should("have.value", "Denver");
        cy.addCityWeatherCard();
        cy.get('*[class^="search-btn"]').click();
      cy.get('*[class^="cities-container"]')
        .find('*[class^="city-card"]')
        .should("have.length", 1)
        .contains("Denver");
      cy.get("p").contains(-370);
    });

    it('Should be able to click Denver weather card, should update url to matching path and display details', () => {
        cy.get('*[class^="city-card"]').click()
            cy.loadSingleCityWeatherForecast()
            .url().should('eq', 'http://localhost:3000/hi-lo/Denver')
            .url().should('not.eq', 'http://localhost:3000/hi-lo/');
    })
      });

      describe("Error and Warning Messages", () => {
          // Will update these once I can get a diff message to display in dom for diff errors.
        it("Should display error message for 500 status code", () => {
          cy.visit("http://localhost:3000/hi-lo/")
            .get("form")
            .get('*[class^="search-by-city"]')
            .type("blah");
          cy.get('*[class^="search-btn"]').click();
          cy.intercept(
            "https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=dc464d940e53a603d97ca8d66b0afd96",
            {
              statusCode: 500,
            }
          );
          cy.contains(`No location found called 'blah'`);
        });

        it("Should display error message for 404 status code", () => {
          cy.visit("http://localhost:3000/hi-lo/")
            .get("form")
            .get('*[class^="search-by-city"]')
            .type("blah");
          cy.get('*[class^="search-btn"]').click();
          cy.contains(`No location found called 'blah'`);
        });

        it("Should display error message for 400 status code", () => {
          cy.visit("http://localhost:3000/hi-lo/")
            .get("form")
            .get('*[class^="search-by-city"]')
            .type("blah");
          cy.get('*[class^="search-btn"]').click();
          cy.intercept(
            "https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=dc464d940e53a603d97ca8d66b0afd96",
            {
              statusCode: 400,
            }
          );
          cy.contains(`No location found called 'blah'`);
        });

        
  });
});
