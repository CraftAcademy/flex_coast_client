describe('User can edit inquiry', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('Successfully', () => {
    it('is expected to edit input field', () => {
      cy.get('[data-cy=input]').type('example@mail.com')
      cy.get('[data-cy=done-btn]').click()
      cy.get('[data-cy=input]').should('be.disabled')
      cy.get('[data-cy=done-btn]').first().click()
      cy.get('[data-cy=input]').first().clear()
      cy.get('[data-cy=input]').first().type('example2@mail.com')
      cy.get('[data-cy=done-btn]').first().click()
      cy.window()
        .its('store')
        .invoke('getState')
        .its('formData.email')
        .should('equal', 'example2@mail.com')
    })
  })
})
