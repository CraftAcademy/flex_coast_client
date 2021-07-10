/* eslint-disable no-undef */
describe('user can submit inquiry to rent out a space with FlexCoast', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://flex-coast-production.herokuapp.com/api/inquiries',
      {
        body: {
          message: 'Thank you for your inquiry! We will be in touch soon.',
        },
      }
    )
    cy.visit('/')
    cy.contains('Rent Out Office').click()
  })

  describe('successfully', () => {
    it('is expected to submit rent out form', () => {
      cy.url().should('contain', '/rent_out')
      cy.get('[data-cy=language-dropdown]').click()
      cy.get('[data-cy=svenska]').click()
      cy.get('[data-cy=rent-out-form]').within(() => {
        cy.get('[data-cy=name]').should('contain', 'Vad heter du?')
        cy.get('[data-cy=name]').type('Edward Black')
        cy.get('[data-cy=phone]').should(
          'contain',
          'Kan vi få ditt telefonnummer?'
        )
        cy.get('[data-cy=phone]').type('0707123456')
        cy.get('[data-cy=email]').should('contain', 'Hur kan vi kontakta dig?')
        cy.get('[data-cy=email]').type('edward.black@mail.se')
        cy.get('[data-cy=notes]').should(
          'contain',
          'Har du något annat du vill säga?'
        )
        cy.get('[data-cy=notes]').type('No thanks for the awesome form')
        cy.get('[data-cy=submit-button]').should('contain', 'Skicka in')
        cy.get('[data-cy=submit-button]').click()
      })
      cy.url().should('contain', 'http://localhost:3001')
      cy.get('[data-cy=success-message]').should(
        'contain',
        'Tack för förfrågan'
      )
    })

    it('is expected to se submit form in english', () => {
      cy.url().should('contain', '/rent_out')
      cy.get('[data-cy=rent-out-form]').within(() => {
        cy.get('[data-cy=name]').should('contain', 'Please tell us your name')
        cy.get('[data-cy=name]').type('Edward Black')
        cy.get('[data-cy=phone]').should(
          'contain',
          'Can you leave your phone number?'
        )
        cy.get('[data-cy=phone]').type('0707123456')
        cy.get('[data-cy=email]').should('contain', 'Where can we reach you?')
        cy.get('[data-cy=email]').type('edward.black@mail.se')
        cy.get('[data-cy=notes]').should(
          'contain',
          'Do you have anything else to say?'
        )
        cy.get('[data-cy=notes]').type('No thanks for the awesome form')
        cy.get('[data-cy=submit-button]').should('contain', 'Send')
        cy.get('[data-cy=submit-button]').click()
      })
      cy.url().should('contain', 'http://localhost:3001')
      cy.get('[data-cy=success-message]').should(
        'contain',
        'Thank you for your inquiry'
      )
    })
  })
})
