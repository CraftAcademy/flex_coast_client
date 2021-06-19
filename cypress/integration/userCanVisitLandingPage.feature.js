describe('User can visit Flex Coast landing page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#rcc-confirm-button').click();
  })

  it('shows the main landing page', () => {
    cy.get('.hero-section').should('have.css', 'background')
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=phone-question]').should('contain', '031-767 41 00')
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
        cy.get('[data-cy=footer-about]').first().should('contain', 'The service')
        cy.get('[data-cy=footer-contact]').first().should('contain', 'Talk to a human')
        cy.get('[data-cy=links]').first().should('contain', 'Please follow us!')
        cy.get('[data-cy=link-grid]').children().should('have.length', 2)
        cy.get('[data-cy=facebook-button]').should('have.attr', 'href', 'https://www.facebook.com/')
        cy.get('[data-cy=linkedin-button]').should('have.attr', 'href', 'https://www.linkedin.com/')
      })
    })
  })
})
