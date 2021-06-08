describe('User can send inquiry', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://flex-coast-development.herokuapp.com/api/inquiries',
      {
        body: {
          message:
            'Thank you for your inquiry! We will be in touch with lovely offices soon.',
        },
      }
    )
    cy.visit('/')
  })
  describe('Successfully', () => {
    it('is expected to display success message', () => {
      cy.get('[data-cy=submit-btn]').should('not.exist')
      cy.get('[data-cy=email-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where can we reach you?'
        )
        cy.get('[data-cy=input]').type('example@mail.com')
        cy.get('[data-cy=done-btn]').click()
      })
      cy.get('[data-cy=company-size-container]').within(() => {
        cy.get('[data-cy=question]').should('contain', 'How big is your team?')
        cy.get('[data-cy=input]').type('100')
        cy.get('[data-cy=done-btn]').click()
      })
      cy.get('[data-cy=office-type-container]').within(() => {
        cy.get('[data-cy=question]').should('contain', 'What type of office are you looking for?')
        cy.get('[data-cy=open-space-lable]').should('be.visible')
        cy.get('[data-cy=office-lable]').should('be.visible')
        cy.get('[data-cy=office-btn]').click({force: true})
        cy.get('[data-cy=done-btn]').click()
      })
      cy.get('[data-cy=submit-btn]').click()
      cy.get('[data-cy=on-submit-message]').should(
        'contain',
        'Thank you for your inquiry! We will be in touch with lovely offices soon.'
      )
    })
  })
})
