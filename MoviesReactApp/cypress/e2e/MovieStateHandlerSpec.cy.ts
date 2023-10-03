import config from '../../src/config.json';

describe('Testing MovieListPage functionality', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  afterEach(() => {
    cy.wait(1000);
  })

  it("Testing genres rendering", () => {
    for(const janre of config.janres) {
      cy.get('.genresList li').contains(janre.toUpperCase());
    }
  });

  it("Testing that component highlights a selected genre", () => {
    cy.get('.genresList .selected').contains(config.defaultJanre.toUpperCase());
  });

  it("Test that movieDetails working", () => {
    cy.get('.movieTile .movieInfo .name').first().invoke('text').then(text => {
      cy.get('.movieTile').first().click().wait(1000);
      cy.get('.movieDetailsWrapper .movieDataWrapper .titleAndRating .title').first().contains(text);
    })
  });

  it("Testing filtering by janre functionality", () => {
    const chosenJanre = config.janres[config.janres.length -1];

    cy.get('.genresList li:last').click();
    cy.get('.genresList .selected').contains(chosenJanre.toUpperCase());
    cy.get('.movieTile').eq(0).get('.movieInfo .ganres').contains(chosenJanre);
  });

  it("Test sorting by Title", () => {
    cy.get('.sortBywrapper .dropdown-menu li ').first().invoke('addClass', 'active').click();
    cy.get('.movieTile .movieInfo .name').first().invoke('text').then(firstMovieTitle => {
      cy.get('.movieTile .movieInfo .name').last().invoke('text').then(lastMovieTitle => {
        expect(lastMovieTitle.toLowerCase().localeCompare(firstMovieTitle.toLowerCase())).to.be.equal(1);
      })
    });
  });

  it("Test sorting by Release date", () => {
    cy.get('.sortBywrapper .dropdown-menu li ').last().invoke('addClass', 'active').click();
    cy.get('.movieTile .movieInfo .year').first().invoke('text').then(firstMovieYear => {
      cy.get('.movieTile .movieInfo .year').last().invoke('text').then(lastMovieYear => {
        expect(Number(lastMovieYear)).to.be.most(Number(firstMovieYear));
      })
    });
  });

  it("Test searching functionality", () => {
    cy.get('.searchForm input').type('Star Wars', { delay: 100 });
    cy.get('.searchForm button').click();
    cy.get('.movieTile .movieInfo .name').first().contains('Star Wars');
  });
})