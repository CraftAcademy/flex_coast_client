describe('User can visit Flex Coast landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the main landing page', () => {
    cy.get('.hero-section').should('have.css', 'background')
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=phone-question]').should('contain', '031-123 456 78')
      cy.get('[data-cy=language-dropdown]').should('be.visible')
      cy.get('[data-cy=flex-coast]').should('be.visible')
    })

    cy.get('[data-cy=welcome-text]').should(
      'contain',
      'Flexible office spaces in beautiful Gothenburg'
    )

    cy.get('[data-cy=footer]').within(() => {
      cy.get('[data-cy=flex-coast-white]')
      cy.get('[data-cy=footer-categories]').within(() => {
        cy.get('[data-cy=footer-about]').first().should('contain', 'About Us')
        cy.get('[data-cy=footer-contact]').first().should('contain', 'Contact')
        cy.get('[data-cy=links]').first().should('contain', 'Find Us')
        cy.get('[data-cy=link-grid]').children().should('have.length', 3)
      })
    })
  })
})
