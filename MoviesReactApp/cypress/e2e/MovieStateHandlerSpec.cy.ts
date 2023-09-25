import config from '../../src/config.json';

describe('Testing MovieStateHandler functionality', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  afterEach(() => {
    cy.wait(1500);
  })

  it("Testing genres rendering", () => {

    for(const janre of config.janres) {
      cy.get('.genresList li').contains(janre);

    }
  });

  it("Testing that component highlights a selected genre", () => {

    cy.get('.genresList .selected').contains(config.defaultJanre);

  });

  it("Testing that handleClick function is working as expected", () => {

    const chosenJanre = config.janres[config.janres.length -1];

    cy.get('.genresList li:last').click();
    cy.get('.genresList .selected').contains(chosenJanre);
  });

  it("Testing filtering by janre functionality", () => {

    const chosenJanre = config.janres[config.janres.length -1];

    cy.get('.genresList li:last').click();
    cy.get('.movieTile').eq(-1).get('.movieInfo .ganres').contains(chosenJanre);
  });

  it("Test that movieDetails working", () => {
    cy.get('.movieTile').eq(1).click();
    cy.get('.movieDetailsWrapper .movieDataWrapper .titleAndRating .title').contains('Grand Budapest');
  });

  it("Test sorting by Title", () => {
    cy.get('.sortBywrapper .dropdown-menu li').eq(0).click();
    cy.get('.movieTile').eq(0).get('.movieInfo .name').contains("Barbie");
    cy.get('.movieTile').eq(-1).get('.movieInfo .name').contains("Red Dragon");
  });

  it("Test sorting by Release Date", () => {
    cy.get('.sortBywrapper .dropdown-menu li').eq(1).click();
    cy.get('.movieTile').eq(0).get('.movieInfo .name').contains("Barbie");
    cy.get('.movieTile').eq(-1).get('.movieInfo .name').contains("Red Dragon");
  });
})