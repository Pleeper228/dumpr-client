describe('End to end tests!!', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.splash-image')
    cy.get('.start-container a').click()
  })
  it('displays bathrooms', () => {
    cy.get('.bathrooms-container .bathrooms .bathroom').should('have.length.gt', 0)
  })
  it('can log in', () => {
    cy.get('.login-button').click()
    cy.get('input[name="username"]').type('Pleeper')
    cy.get('input[name="password"]').type('password')
    cy.get('input[type="submit"]').click()

    cy.get('.welcome').should('have.text', 'Pleeper')
  })
  it('can create bathroom', () => {
    cy.get('.login-button').click()
    cy.get('input[name="username"]').type('Pleeper')
    cy.get('input[name="password"]').type('password')
    cy.get('input[type="submit"]').click()

    cy.get('.create-bathroom').click()

    cy.get('input[name="establishment_name"]').type('Test Bathroom')
    cy.get('input[name="address"]').type('1234 S. Fake St.')
    cy.get('input[name="photo_url"]').type('https://www.americanstandard-us.com/-/media/sites/asus/images/products/toilets/champion-pro-right-height-elongated-128-gpf-toilet_211aa104/silo/211aa104020-champion-pro-right-height-elongated-toilet.png')
    cy.get('textarea[name="description"]').type('This bathroom is only a test.')
    cy.get('input[name="rating"]').type('10')
    cy.get('input[type="submit"]').click()

    cy.get('.bathroom-details-preview h3').contains('Test Bathroom')
  })
  it('updates bathrooms', () => {
    cy.get('.login-button').click()
    cy.get('input[name="username"]').type('Pleeper')
    cy.get('input[name="password"]').type('password')
    cy.get('input[type="submit"]').click()

    cy.get('.bathroom-details-preview h3').contains('Test Bathroom').click()
    cy.get('.update-button').click()

    cy.get('input[name="establishment_name"]').type('Test Bathroom Update')
    cy.get('input[type="submit"]').click()

    cy.get('.bathroom-details-preview h3').contains('Test Bathroom Update').click()
  })
  it('deletes bathrooms', () => {
    cy.get('.login-button').click()
    cy.get('input[name="username"]').type('Pleeper')
    cy.get('input[name="password"]').type('password')
    cy.get('input[type="submit"]').click()

    cy.get('.bathroom-details-preview h3').contains('Test Bathroom').click()
    cy.get('.delete-button').click()
    cy.get('.delete-button').click()
  })
  it('can log out', () => {
    cy.get('.login-button').click()
    cy.get('input[name="username"]').type('Pleeper')
    cy.get('input[name="password"]').type('password')
    cy.get('input[type="submit"]').click()

    cy.get('.logout-button').click()

    cy.get('.signout-container h1').should('have.text', 'You have been successfully logged out. Smell ya later!')
  })
})
