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
      cy.get('[data-cy=email-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where can we reach you?'
        )
        cy.get('[data-cy=input]').type('example@mail.com')
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
