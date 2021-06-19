describe('User can switch between languages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to change the UI language', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()

    context('checking Swedish page', () => {
      cy.get('[data-cy=welcome-message]').should(
        'contain',
        'Flexibla kontor i vackra Göteborg'
      )
      cy.get('[data-cy=pitch-message]').should(
        'contain',
        'Ditt fokus är att bygga ett fantastiskt företag. Vårt fokus är att hitta det bästa kontoret för dig och ditt team.'
      )
      cy.get('[data-cy=offer-1]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Valfri storlek')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Från ett öppet landskap till ett eget rum'
        )
      })
      cy.get('[data-cy=offer-2]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'På dina villkor')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Månad, kvartal eller längre perioder'
        )
      })
      cy.get('[data-cy=offer-3]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Bästa lägena')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Välj bland dem bästa lägena i Göteborg'
        )
      })
      cy.get('[data-cy=footer-about-header]').should('contain', 'Om tjänsten')
      cy.get('[data-cy=footer-about-us]').should(
        'contain',
        'Vi hjälper entreprenör att hitta kontorslokaler där bra idéer föds och fantastiska företag växer'
      )
      cy.get('[data-cy=footer-contact-header]').should(
        'contain',
        'Slå oss en pling!'
      )
      cy.get('[data-cy=footer-find-us-header]').should(
        'contain',
        'Följ oss gärna!'
      )
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()

    context('checking English page', () => {
      cy.get('[data-cy=welcome-message]').should(
        'contain',
        'Flexible office spaces in beautiful Gothenburg'
      )
      cy.get('[data-cy=pitch-message]').should(
        'contain',
        'Your focus is to build an awesome company. Our focus is to find the best office for you and your team.'
      )
      cy.get('[data-cy=offer-1]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Any size space')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'From a single desk, all the way up to configured offices.'
        )
      })
      cy.get('[data-cy=offer-2]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'On your terms')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Month, quarter or longer periods.'
        )
      })
      cy.get('[data-cy=offer-3]').within(() => {
        cy.get('[data-cy=offer-title]').should('contain', 'Best Locations')
        cy.get('[data-cy=offer-description]').should(
          'contain',
          'Choose places from the most beautiful parts of Gothenburg.'
        )
      })
      cy.get('[data-cy=footer-about-header]').should('contain', 'The service')
      cy.get('[data-cy=footer-about-us]').should(
        'contain',
        'We provide high end office spaces in Gothenburg with flexible conditions and contracts.'
      )
      cy.get('[data-cy=footer-contact-header]').should(
        'contain',
        'Give us a buzz!'
      )
      cy.get('[data-cy=footer-find-us-header]').should(
        'contain',
        'Please follow us!'
      )
    })
  })
  it('is expected to translate testimonials', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=testimonial-1-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        '"Jag hittade mitt kontor på Walborg Ventures tack vare folket på FlexCoast. Jag älskar det centrala läget och de flexibla villkoren här!"'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'VD, Renable AB'
      )
    })
    cy.get('[data-cy=testimonial-2-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        '"Vi växer i hög takt - och vi hittade ett privat kontor som verkligen passade våra behov."'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'VD för InnovDr AB'
      )
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.scrollTo(0, 700)
    cy.wait(2000)
    cy.get('[data-cy=testimonial-1-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        '"I found my office at Walborg Ventures thanks to the people at FlexCoast. I love the central location and the flexible terms here!"'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'CEO, Renable AB'
      )
    })
    cy.get('[data-cy=testimonial-2-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        '"We are growing at high pace - and we found a private office that really suited our needs."'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'CEO at InnovDr AB'
      )
    })
  })
  it('is expected to translate persons cards', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=person-0-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'SE-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should('contain', 'CEO av MK')
    })
    cy.get('[data-cy=person-1-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'SE-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should('contain', 'CEO av Lenvovo')
    })
    cy.get('[data-cy=person-2-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'SE-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Fastighetsspecialist på FlexCoast'
      )
    })
    cy.get('[data-cy=person-3-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'SE-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Chefredaktör av Some News'
      )
    })
    cy.get('[data-cy=person-4-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'SE-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Fastighetsspecialist på FlexCoast'
      )
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.get('[data-cy=person-0-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'EN-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should('contain', 'CEO of MK')
    })
    cy.get('[data-cy=person-1-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'EN-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should('contain', 'CEO of Lenvovo')
    })
    cy.get('[data-cy=person-2-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'EN-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Real estate specialist at FlexCoast'
      )
    })
    cy.get('[data-cy=person-3-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'EN-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Chief Editor at Some News'
      )
    })
    cy.get('[data-cy=person-4-container]').within(() => {
      cy.get('[data-cy=person-text]').should(
        'contain',
        'EN-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Real estate specialist at FlexCoast'
      )
    })
  })
})
