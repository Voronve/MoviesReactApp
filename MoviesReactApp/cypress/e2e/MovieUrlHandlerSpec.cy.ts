import config from '../../src/config.json';

describe('Testing routing functionality', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  afterEach(() => {
    cy.wait(1000);
  })

  it("Testing handling state via url parameters", () => {
    cy.visit('/');
    const chosenJanre = config.janres[config.janres.length -1];
    const query = 'Star';
    cy.get('.genresList li:last').click();
    cy.get('.sortBywrapper .dropdown-menu li ').last().invoke('addClass', 'active').click();
    cy.get('.searchForm input').type(query, { delay: 100 });
    cy.get('.searchForm button').click();
    cy.url().should('include', `genre=${chosenJanre}`);
    cy.url().should('include', `sortBy=release_date`);
    cy.url().should('include', `query=${query}`);
    cy.get('.movieTile .movieInfo .name').first().contains(query);
    cy.get('.movieTile .movieInfo .ganres').contains(chosenJanre);
    cy.get('.movieTile .movieInfo .year').first().invoke('text').then(firstMovieYear => {
      cy.get('.movieTile .movieInfo .year').last().invoke('text').then(lastMovieYear => {
        expect(Number(lastMovieYear)).to.be.most(Number(firstMovieYear));
      })
    });
  });

  it("Testing movie details functionality", () => {
    cy.visit('/');
    const chosenJanre = config.janres[config.janres.length -1];
    const query = 'Altitude';
    cy.get('.genresList li:last').click();
    cy.get('.sortBywrapper .dropdown-menu li ').last().invoke('addClass', 'active').click();
    cy.get('.searchForm input').type(query, { delay: 100 });
    cy.get('.searchForm button').click();

    cy.get('.movieTile .movieInfo .name').first().invoke('text').then(text => {
      cy.get('.movieTile').first().click().wait(1000);
      cy.get('.movieDetailsWrapper .movieDataWrapper .titleAndRating .title').first().contains(text);
    });

    cy.url().should('include', `genre=${chosenJanre}`);
    cy.url().should('include', `sortBy=release_date`);
    cy.url().should('include', `query=${query}`);
    cy.get('.movieTile .movieInfo .name').first().contains(query);

    cy.get('.movieDetailsWrapper a').click();

    cy.url().should('include', `genre=${chosenJanre}`);
    cy.url().should('include', `sortBy=release_date`);
    cy.url().should('include', `query=${query}`);
    cy.get('.movieTile .movieInfo .name').first().contains(query);
  });

  it("Testing movie details direct link", () => {
    cy.visit('/443700');
    cy.get('.movieDetailsWrapper .movieDataWrapper .titleAndRating .title').first().contains('Altitude');
    cy.visit('/000000');
    cy.get('.movieDetailsWrapper .movieDataWrapper .titleAndRating .title').first().contains('Such movie is absent');
  });
})