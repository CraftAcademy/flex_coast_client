describe('User can visit Flex Coast landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the main landing page', () => {
    cy.get('.hero-section')
      .should('have.css', 'background-image')
      .and('include', 'hero')
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=phone-number]').should('contain', '08-123 456 78')
      cy.get('[data-cy=language-dropdown]').should('be.visible')
      cy.get('[data-cy=flex-coast]').should('be.visible')
    })

    cy.get('[data-cy=welcome-text]').should(
      'contain',
      'Flexible short term office leasing in lovely Gothenburg'
    )
    cy.get('[data-cy=get-started]').should('contain', 'Get Started').click()
    cy.url().should('contain', '/inquiry')

    cy.get('[data-cy=footer]').within(() => {
      cy.get('[data-cy=footer-header]').should('contain', 'Flex Coast')
      cy.get('[data-cy=footer-categories]').within(() => {
        cy.get('[data-cy=footer-about]').should('contain.text')
        cy.get('[data-cy=footer-contact]').should('contain.text')
        cy.get('[data-cy=links]').should('be.visible')
      })
    })
  })
})
