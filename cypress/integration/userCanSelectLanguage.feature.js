describe('User can switch between languages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to change the UI language', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=welcome-message]').should(
      'contain',
      'Hej! För att att hitta bästa möjliga kontor, behöver vi ställa lite frågor.'
    )
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.get('[data-cy=welcome-message]').should(
      'contain',
      "Hi! Let's talk requirements, so we can provide personalised suggestions for your company."
    )
  })
})
