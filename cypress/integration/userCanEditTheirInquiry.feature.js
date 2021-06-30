/* eslint-disable no-undef */
describe('User can edit inquiry', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('Successfully', () => {
    it('is expected to edit input field', () => {
      cy.get('[data-cy=input]').type('100')
      cy.get('[data-cy=done-btn]').click()
      cy.get('[data-cy=input]').should('be.disabled')
      cy.get('[data-cy=done-btn]').first().click()
      cy.get('[data-cy=input]').first().clear()
      cy.get('[data-cy=input]').first().type('101')
      cy.get('[data-cy=done-btn]').first().click()
      cy.window()
        .its('store')
        .invoke('getState')
        .its('formData.size')
        .should('equal', '101')
    })
  })
})
