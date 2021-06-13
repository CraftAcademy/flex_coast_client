describe('User can send inquiry', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://flex-coast-api-development.herokuapp.com/api/inquiries',
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
      cy.get('[data-cy=wizard]').within(() => {

        cy.get('[data-cy=company-size-container]').within(() => {
          cy.get('[data-cy=question]').should('contain', 'How big is your team?')
          cy.get('[data-cy=input]').type('100')
          cy.get('[data-cy=done-btn]').click()
        })
      });

      cy.get('[data-cy=office-type-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'What type of office are you looking for?'
        )
        cy.get('[data-cy=open-space-lable]').should('be.visible')
        cy.get('[data-cy=office-lable]').should('be.visible')
        cy.get('[data-cy=office-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
      })

      cy.get('[data-cy=email-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where can we reach you?'
        )
        cy.get('[data-cy=input]').type('example@mail.com')
        cy.get('[data-cy=done-btn]').click()
      })

      cy.get('[data-cy=company-name-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'What is the name of your company?'
        )
        cy.get('[data-cy=input]').type('Cyberdyne Systems')
        cy.get('[data-cy=done-btn]').click()
      })

      cy.get('[data-cy=peer-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Would you like to share office with others from your industry?'
        )
        cy.get('[data-cy=positive-lable]').should('be.visible')
        cy.get('[data-cy=negative-lable]').should('be.visible')
        cy.get('[data-cy=positive-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
      })
      cy.get('[data-cy=location-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Where would you like to be situated?'
        )
        cy.get('[data-testID=locations]').click()
      })
      cy.get('[data-testID=rrs-option_locations_1]').click()
      cy.get('[data-testID=rrs-option_locations_2]').click()
      cy.get('[data-testID=rrs-option_locations_3]').click().click()
      cy.get('[data-cy=location-question-container]')
        .find('[data-cy=done-btn]')
        .click()

      cy.get('[data-cy=flexible-question-container]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          'Do you plan to work full-time or flexible hours?'
        )
        cy.get('[data-cy=full-time-lable]').should('be.visible')
        cy.get('[data-cy=flexible-lable]').should('be.visible')
        cy.get('[data-cy=flexible-btn]').click({ force: true })
        cy.get('[data-cy=done-btn]').click()
      })

      const expectedOutcome = {
        size: '100',
        office_type: 'Office',
        email: 'example@mail.com',
        company: 'Cyberdyne Systems',
        peers: 'Yes',
        locations: ['Lindholmen', 'Gamlestaden'],
        flexible: 'true',
      }
      cy.window()
        .its('store')
        .invoke('getState')
        .its('formData')
        .should('deep.equal', expectedOutcome)
      cy.get('[data-cy=submit-btn]').click()
      cy.get('[data-cy=on-submit-message]').should(
        'contain',
        'Thank you for your inquiry! We will be in touch with lovely offices soon.'
      )
    })
  })
})
