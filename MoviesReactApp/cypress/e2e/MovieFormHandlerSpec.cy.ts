import config from '../../src/config.json';

describe('Testing MovieListPage functionality', () => {

  before(() => {
    cy.visit('/');
  })

  afterEach(() => {
    cy.wait(1000);
  })

//   it("Testing add movie form rendering", () => {

//     cy.get('.movieListWrapper .searchContainer .addMovie').click();
//     cy.get('.dialogWindow .movieForm .column-2-3 input[name="title"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .column-2-3 input[name="poster_path"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .column-2-3 input[name="genres"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .column-1-3 input[name="release_date"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .column-1-3 input[name="vote_average"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .column-1-3 input[name="runtime"]').invoke('val').should('be.empty');
//     cy.get('.dialogWindow .movieForm .full-width textarea[name="overview"]').invoke('val').should('be.empty');
//   });

  it("Testing adding movie functionality working", () => {

    cy.get('.movieListWrapper .searchContainer .addMovie').click();
    cy.get('.dialogWindow .movieForm .column-2-3 input[name="title"]').type('TestMovie', { delay: 100 });
    cy.get('.dialogWindow .movieForm .column-2-3 input[name="poster_path"]').type('http://test.com', { delay: 100 });
    cy.get('.dialogWindow .movieForm .column-2-3 input[name="genres"]').type('Action, Comedy', { delay: 100 });
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="release_date"]').type('2022-05-18', { delay: 100 });
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="vote_average"]').type('12', { delay: 100 });
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="runtime"]').type('190', { delay: 100 });
    cy.get('.dialogWindow .movieForm .full-width textarea[name="overview"]').type('Test description', { delay: 100 });
    cy.get('.dialogWindow .movieForm .buttonBlock .submitButton').click();

    cy.visit('/');
    cy.get('.searchForm input').type('TestMovie', { delay: 100 });
    cy.get('.searchForm button').click();
    cy.get('.movieTile .movieInfo .name').first().contains('TestMovie');
  });

  it("Testing editing movie functionality working", () => {
    cy.visit('/');
    cy.get('.searchForm input').type('TestMovie', { delay: 100 });
    cy.get('.searchForm button').click();
    cy.get('.movieTile').first().find('.editMenuWrapper .gearIcon').click();
    cy.get('.movieTile').first().find('.editMenuWrapper .editMovieMenu li').eq(1).click();

    cy.get('.dialogWindow .movieForm .column-2-3 input[name="title"]').invoke('val').should('eq', 'TestMovie');
    cy.get('.dialogWindow .movieForm .column-2-3 input[name="poster_path"]').invoke('val').should('eq', 'http://test.com');
    cy.get('.dialogWindow .movieForm .column-2-3 input[name="genres"]').invoke('val').should('eq', 'Action, Comedy');
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="release_date"]').invoke('val').should('eq', '2022-05-18');
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="vote_average"]').invoke('val').should('eq', '12');
    cy.get('.dialogWindow .movieForm .column-1-3 input[name="runtime"]').invoke('val').should('eq', '190');
    cy.get('.dialogWindow .movieForm .full-width textarea[name="overview"]').invoke('val').should('eq', 'Test description');
  });

  it("Testing deleting movie functionality working", () => {
    cy.visit('/');
    cy.get('.searchForm input').type('TestMovie', { delay: 100 });
    cy.get('.searchForm button').click();
    cy.get('.movieTile').first().find('.editMenuWrapper .gearIcon').click();
    cy.get('.movieTile').first().find('.editMenuWrapper .editMovieMenu li').eq(2).click();
    cy.get('.dialogWindow .movieForm .buttonBlock .submitButton').click();
    cy.visit('/');
    cy.get('.searchForm input').type('TestMovie', { delay: 100 });
    cy.get('.searchForm button').click();
    cy.get('.movieTile').should('not.exist');
  });
});