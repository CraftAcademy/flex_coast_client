import { testimonials, persons } from '../data/testimonials'
const se = {
  translation: {
    landingPage: {
      introText: 'Flexibla kontor i vackra Göteborg',
      startButton: 'Hitta Kontor',
      phoneCallUsText: 'Eller varför inte slå oss en pling',
    },
    testimonials: {
      id_1: {
        text: testimonials[0].review_se,
        position: testimonials[0].position_se,
      },
      id_2: {
        text: testimonials[1].review_se,
        position: testimonials[1].position_se,
      },
    },

    persons: {
      id_0: {
        text: persons[0].text_se,
        position: persons[0].position_se,
      },
      id_1: {
        text: persons[1].text_se,
        position: persons[1].position_se,
      },
      id_2: {
        text: persons[2].text_se,
        position: persons[2].position_se,
      },
      id_3: {
        text: persons[3].text_se,
        position: persons[3].position_se,
      },
      id_4: {
        text: persons[4].text_se,
        position: persons[4].position_se,
      },
    },

    pitchMessage:
      'Ditt fokus är att bygga ett fantastiskt företag. Vårt fokus är att hitta det bästa kontoret för dig och ditt team.',

    compellingText:
      'Hallå där! Om du letar efter att hyra flexibla kortvariga kontor i Göteborg har du hittat rätt plats. Kanske har du precis startat ett nytt företag eller behöver du bara ett tillfälligt kontor att arbeta i?',

    footer: {
      subHeader1: 'Om tjänsten',
      subHeader2: 'Slå oss en pling!',
      subHeader3: 'Följ oss gärna!',
      aboutUsText:
        'Vi hjälper entreprenör att hitta kontorslokaler där bra idéer föds och fantastiska företag växer',
      startButton: 'Hitta Kontor',
    },

    fantasticOffer: {
      offerTitle: 'För blixtrande snabb kontakt',
      offerSMS: 'Skicka ett SMS till 070-767 41 00',
      offer1Sub: 'Valfri storlek',
      offer1: 'Från ett öppet landskap till ett eget rum',
      offer2Sub: 'På dina villkor',
      offer2: 'Månad, kvartal eller längre perioder',
      offer3Sub: 'Bästa lägena',
      offer3: 'Välj bland dem bästa lägena i Göteborg',
    },

    question: {
      email: 'Hur kan vi kontakta dig?',
      size: 'Hur stort är ditt team?',
      officeType: 'Vilken typ av kontor letar du efter?',
      phone: 'Slutligen ange ditt nummer så att vi enkelt kan nå dig.',
      peers: 'Vill du dela kontor med andra från din bransch?',
      location: 'Vilka områden är du intresserad av?',
      workingHours:
        'Kommer ni jobba heltid på plats eller var lite mer flexibel?',
      start_date: 'När behöver du flytta in?',
    },

    answer: {
      interesting: 'Låter bra!',
      email: '– Min email är ',
      size: '– Vi är en grupp av ',
      officeType: '– Vi behöver ',
      officeLabel: 'Kontor',
      openSpaceLabel: 'Öppet utrymme',
      combinedLabel: 'Alla',
      phone: '– Mitt nummer är',
      peersNegative: 'Nej',
      peersPositive: 'Ja',
      location: '– Vi är intresserade av',
      locationAll: 'Alla',
      workingHours: '– Vi kommer vara',
      fullTimeLabel: 'Heltid',
      flexibleLabel: 'Flexibel',
      mixedLabel: 'En mix',
      start_dateNow: 'Idag',
      start_dateQuarter: 'Inom 2 månader',
      start_dateUnsure: 'Osäker',
    },
    submitButton: 'Skicka in',
    submitMessage:
      'Tack för dina svar! Vi återkommer så snart som möjligt med dem bästa resultaten!',
  },
}

export default se
