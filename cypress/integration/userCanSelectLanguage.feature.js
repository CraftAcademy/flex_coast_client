

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
      cy.get('[data-cy=footer-about-header]').should('contain', 'Om Oss')
      cy.get('[data-cy=footer-about-us]').should(
        'contain',
        'Vi erbjuder topnotch kontorslokaler i Göteborg med flexibla villkor och kortvariga kontrakt.'
      )
      cy.get('[data-cy=footer-contact-header]').should(
        'contain',
        'Kontakta Oss'
      )
      cy.get('[data-cy=footer-find-us-header]').should('contain', 'Hitta Oss')
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
      cy.get('[data-cy=footer-about-header]').should('contain', 'About Us')
      cy.get('[data-cy=footer-about-us]').should(
        'contain',
        'We provide high end office spaces in Gothenburg with flexible conditions and short term contracts.'
      )
      cy.get('[data-cy=footer-contact-header]').should('contain', 'Contact')
      cy.get('[data-cy=footer-find-us-header]').should('contain', 'Find Us')
    })
  })
  it('is expected to translate testimonials', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=testimonial-1-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'SE-testimonial-1 Flex Coast har genom hela processen varit lyhörda till våra behov och snabba i sin respons och sitt arbete. Jag kan starkt rekommendera att ta hjälp från Flex Coast!'
      )
      cy.get('[data-cy=testimonial-position]').should('contain', 'CEO av MK')
    })
    cy.get('[data-cy=testimonial-2-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'SE-testimonial-2 Från första samtalet med Viktor på Flex Coast så har allt fungerat fläckfritt. Alltid tillgänglig, alltid stenkoll och aldrig rädd för att ge det lilla extra.'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'CEO av Fake News'
      )
    })
    cy.get('[data-cy=testimonial-3-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'SE-testimonial-3 Flex Coast är snabba, professionella och flexibla. De löste problemen snabbt och kändes verkligen som de var på vår sida i kontorsprojektet.'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'Chefredaktör för Some News'
      )
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.get('[data-cy=testimonial-1-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'EN-testimonial-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
      cy.get('[data-cy=testimonial-position]').should('contain', 'CEO of MK')
    })
    cy.get('[data-cy=testimonial-2-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'EN-testimonial-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'CEO of Fake News'
      )
    })
    cy.get('[data-cy=testimonial-3-container]').within(() => {
      cy.get('[data-cy=testimonial-text]').should(
        'contain',
        'EN-testimonial-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
      cy.get('[data-cy=testimonial-position]').should(
        'contain',
        'Chief Editor at Some News'
      )
    })
  })
  it('is expected to translate persons cards', () => {
    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=svenska]').click()
    cy.get('[data-cy=person-0-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'SE-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'CEO av MK'
      )
    })
    cy.get('[data-cy=person-1-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'SE-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'CEO av Lenvovo'
      )
    })
    cy.get('[data-cy=person-2-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'SE-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Fastighetsspecialist på FlexCost',
      )
    })
    cy.get('[data-cy=person-3-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'SE-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Chefredaktör av Some News'
      )
    })
    cy.get('[data-cy=person-4-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'SE-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Fastighetsspecialist på FlexCost',
      )
    })

    cy.get('[data-cy=language-dropdown]').click()
    cy.get('[data-cy=english]').click()
    cy.get('[data-cy=person-0-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'EN-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'CEO of MK'
      )
    })
    cy.get('[data-cy=person-1-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'EN-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'CEO of Lenvovo'
      )
    })
    cy.get('[data-cy=person-2-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'EN-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Real estate specialist at FlexCost'
      )
    })
    cy.get('[data-cy=person-3-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'EN-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Chief Editor at Some News'
      )
    })
    cy.get('[data-cy=person-4-container]').within(() => {
      cy.get('[data-cy=person-text]').should('contain', 'EN-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
      cy.get('[data-cy=person-position]').should(
        'contain',
        'Real estate specialist at FlexCost'
      )
    })

  })
})
