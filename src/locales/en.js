import { testimonials, persons } from '../data/testimonials'

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
      subHeader1: 'The service',
      subHeader2: 'Give us a buzz!',
      subHeader3: 'Please follow us!',
      aboutUsText:
        'We help entrepreneurs find office space where good ideas are born and fantastic companies grow.',
      startButton: 'Get Started',
    },

    fantasticOffer: {
      offerTitle: 'For lightning fast contact',
      offerSMS: 'Call us on 031-296500',
      offer1Sub: 'Any size space',
      offer1: 'From a single desk, all the way up to configured offices.',
      offer2Sub: 'On your terms',
      offer2: 'Month, quarter or longer periods.',
      offer3Sub: 'Best Locations',
      offer3: 'Choose places from the most beautiful parts of Gothenburg.',
      rentOutOffice: 'Rent Out Office',
    },

    question: {
      email: 'Where can we reach you?',
      size: 'How big is your team?',
      officeType: 'What type of office are you looking for?',
      phone: 'Is it ok if I give you a call?',
      peers: 'Would you like to share office with others from your industry?',
      location: 'Where would you like to be situated?',
      workingHours: 'Do you plan to work full-time or flexible hours?',
      start_date: 'When do you plan to move in?',
    },
    answer: {
      interesting: 'Sounds interesting!',
      email: '– My email is ',
      size: '– We are a group of ',
      officeType: '– We need an ',
      officeLabel: 'Office',
      openSpaceLabel: 'Open space',
      combinedLabel: 'Combined',
      phone: '– Yes, my number is',
      peersNegative: 'No',
      peersPositive: 'Yes',
      location: "– We're interested in",
      locationAll: 'Any',
      workingHours: '– It will be ',
      fullTimeLabel: 'Full Time',
      flexibleLabel: 'Flexible',
      mixedLabel: 'Mixed',
      start_dateNow: 'ASAP',
      start_dateQuarter: 'In 2 months',
      start_dateUnsure: 'Not Sure',
    },
    rentOutQuestions: {
      name: 'Please tell us your name',
      phone: 'Can you leave your phone number?',
      location: 'Where can we reach you?',
      extraText: 'Do you have anything else to say?',
    },
    submitButton: 'Send',
    submitMessage:
      'Thanks for your answers! We will get back to you as soon as possible with the best results!',
    officeSubmitMessage: 'Thank you for your inquiry',
  },
}

export default en
