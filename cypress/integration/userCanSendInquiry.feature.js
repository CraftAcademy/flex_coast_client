describe('User can send inquiry', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://flex-coast-api-development.herokuapp.com/inquiries',
      {
        body: {
          message:
            'Thank you for your inquiry! We will be in touch with lovely offices soon.',
        },
      }
    )
    
    cy.visit('/')
    cy.get('#rcc-confirm-button').click();
  })
  describe('Successfully', () => {
    it('is expected to display success message', () => {
      cy.get('[data-cy=submit-btn]').should('not.exist')
      cy.get('[data-cy=wizard]').within(() => {
        cy.get('[data-cy=company-size-container]').within(() => {
          cy.get('[data-cy=question]').should(
            'contain',
            'How big is your team?'
          )
          cy.get('[data-cy=input]').type('100')
          cy.get('[data-cy=done-btn]').click()
          cy.wait('@eventRequest')
        })
      })

      cy.get('[data-cy=office-type-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'What type of office are you looking for?'
        )
        cy.get('[data-cy=open-space-label]').should('be.visible')
        cy.get('[data-cy=office-label]').should('be.visible')
        cy.get('[data-cy=combined-label]').should('be.visible')
        cy.get('[data-cy=combined-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })

      cy.get('[data-cy=email-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where can we reach you?'
        )
        cy.get('[data-cy=input]').type('example@mail.com')
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })

      cy.get('[data-cy=peer-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Would you like to share office with others from your industry?'
        )
        cy.get('[data-cy=positive-label]').should('be.visible')
        cy.get('[data-cy=negative-label]').should('be.visible')
        cy.get('[data-cy=positive-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })
      cy.get('[data-cy=location-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where would you like to be situated?'
        )
        cy.get('[data-testID=locations]').click()
        cy.wait('@eventRequest')
      })
      cy.get('[data-testID=rrs-option_locations_1]').click()
      cy.get('[data-testID=rrs-option_locations_2]').click()
      cy.get('[data-testID=rrs-option_locations_3]').click().click()
      cy.get('[data-cy=location-question-container]')
        .find('[data-cy=done-btn]')
        .click({ force: true })
        cy.wait('@eventRequest')

      cy.get('[data-cy=flexible-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Do you plan to work full-time or flexible hours?'
        )
        cy.get('[data-cy=full-time-label]').should('be.visible')
        cy.get('[data-cy=flexible-label]').should('be.visible')
        cy.get('[data-cy=mixed-label]').should('be.visible')
        cy.get('[data-cy=mixed-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })

      cy.get('[data-cy=start-date-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'When do you plan to move in?'
        )
        cy.get('[data-cy=now-label]').should('be.visible')
        cy.get('[data-cy=quarter-label]').should('be.visible')
        cy.get('[data-cy=unsure-label]').should('be.visible')
        cy.get('[data-cy=now-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })

      cy.get('[data-cy=phone-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Finally, please provide your number so that we can easily reach you.'
        )
        cy.get('[data-cy=input]').type('0713371337')
        cy.get('[data-cy=done-btn]').click()
        cy.wait('@eventRequest')
      })

      const expectedOutcome = {
        size: '100',
        office_type: 'combined',
        email: 'example@mail.com',
        peers: 'yes',
        locations: ['Lindholmen', 'Gamlestaden'],
        flexible: 'mixed',
        start_date: 'now',
        phone: '0713371337',
      }
      cy.window()
        .its('store')
        .invoke('getState')
        .its('formData')
        .should('deep.equal', expectedOutcome)

      cy.get('[data-cy=submit-btn]').click()
      cy.wait('@eventRequest')
      cy.get('[data-cy=wizard]').should('not.exist')
      cy.get('[data-cy=on-submit-message]').should(
        'contain',
        'Thanks for your answers! We will get back to you as soon as possible with the best results!'
      )
    })
  })
})
