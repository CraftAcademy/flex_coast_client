import { testimonials, persons } from '../assets/testimonials'

const en = {
  translation: {
    landingPage: {
      introText: 'Flexible office spaces in beautiful Gothenburg',
      startButton: 'Get Started',
      phoneCallUsText: 'Or if you want, just call us',
    },
    testimonials: {
      id_1: {
        text: testimonials[0].review_en,
        position: testimonials[0].position_en,
      },
      id_2: {
        text: testimonials[1].review_en,
        position: testimonials[1].position_en,
      },
      id_3: {
        text: testimonials[2].review_en,
        position: testimonials[2].position_en,
      },
    },

    persons: {
      id_0: {
        text: persons[0].text_en,
        position: persons[0].position_en,
      },
      id_1: {
        text: persons[1].text_en,
        position: persons[1].position_en,
      },
      id_2: {
        text: persons[2].text_en,
        position: persons[2].position_en,
      },
      id_3: {
        text: persons[3].text_en,
        position: persons[3].position_en,
      },
      id_4: {
        text: persons[4].text_en,
        position: persons[4].position_en,
      },
    },

    pitchMessage:
      'Your focus is to build an awesome company. Our focus is to find the best office for you and your team.',

    compellingText:
      ' Hey there! If you are looking for leasing flexible short term offices in Gothenburg you have found the right place. Maybe you just started up a new company or you just need some temporary office space to work in?',

    footer: {
      subHeader1: 'About Us',
      subHeader2: 'Contact',
      subHeader3: 'Find Us',
      aboutUsText:
        'We provide high end office spaces in Gothenburg with flexible conditions and short term contracts.',
      startButton: 'Get Started',
    },

    fantasticOffer: {
      offerTitle: 'Flexible workspace where and how you need it',
      offer1Sub: 'Any size space',
      offer1: 'From a single desk, all the way up to configured offices.',
      offer2Sub: 'On your terms',
      offer2: 'Month, quarter or longer periods.',
      offer3Sub: 'Best Locations',
      offer3: 'Choose places from the most beautiful parts of Gothenburg.',
    },

    question: {
      email: 'Where can we reach you?',
      size: 'How big is your team?',
      officeType: 'What type of office are you looking for?',
      phone:
        'Finally, please provide your number so that we can easily reach you.',
      peers: 'Would you like to share office with others from your industry?',
      location: 'Where would you like to be situated?',
      workingHours: 'Do you plan to work full-time or flexible hours?',
      start_date: 'When do you plan to move in?'
    },
    answer: {
      interesting: 'Sounds interesting!',
      email: 'My email is ',
      size: 'We are a group of ',
      officeType: 'We need an ',
      officeLabel: 'Office',
      openSpaceLabel: 'Open space',
      combinedLabel: 'Combined',
      phone: 'My number is',
      peersNegative: 'No',
      peersPositive: 'Yes',
      location: "We're interested in",
      locationAll: 'Any',
      workingHours: 'It will be ',
      fullTimeLabel: 'Full Time',
      flexibleLabel: 'Flexible',
      mixedLabel: 'Mixed',
      start_dateNow: 'ASAP',
      start_dateQuarter: 'In two month',
      start_dateUnsure: 'Not Sure'
    },
    submitButton: 'Send',
    submitMessage: 'Thanks for your answers! We will get back to you as soon as possible with the best results!'
  },
}

export default en
