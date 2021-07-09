describe('user can submit inquiry to rent out a space with FlexCoast', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=rent-out-button]').should('contain', 'Rent Out Office').click()
  });
  
  it('is expected to submit rent out form', () => {
    cy.url().should('contain', 'http://localhost:3001/rent_out')
    cy.get('[data-cy=rent-out-form]').within(() => {
      cy.get('[data-cy=name]').type('Edward Black')
      cy.get('[data-cy=phone]').type('0707123456')
      cy.get('[data-cy=email]').type('edward.black@mail.se')
      cy.get('[data-cy=notes]').type('No thanks for the awesome form')
      cy.get('[data-cy=submit-button]').click()
      cy.url().should('contain', 'http://localhost:3001')
      cy.get('[data-cy=success-message]').should('contain', 'Thanks for your inquiry')
    })
  });
})
