describe('User can switch between languages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to change the UI language', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=welcome-text]').should(
      'contain',
      'Flexibla kontor i vackra Göteborg'
    )
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.get('[data-cy=welcome-text]').should(
      'contain',
      "Flexible office spaces in beautiful Gothenburg"
    )
  })
})
