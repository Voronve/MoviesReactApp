import config from '../../src/config.json';

describe('Testing GanreSelect component', () => {

  beforeEach(() => {
    cy.visit('/');
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
})