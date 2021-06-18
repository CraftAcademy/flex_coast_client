import logoPlaceholder from '../assets/logoPlaceholder.png'
import leifLogo from '../assets/leif_logo.png'
import matildaLogo from '../assets/matilda_logo.png'
import profile1 from '../assets/social-img-1.jpg'
import profile2 from '../assets/social-img-2.jpg'
import profile3 from '../assets/social-img-3.jpg'

export const testimonials = [
  {
    id: 1,
    review_en:
      '"I found my office at Walborg Ventures thanks to the people at FlexCoast. I love the central location and the flexible terms here!"',
    review_se:
      '"Jag hittade mitt kontor på Walborg Ventures tack vare folket på FlexCoast. Jag älskar det centrala läget och de flexibla villkoren här!"',
    name: 'Leif Sundström',
    position_en: 'CEO, Renable AB',
    position_se: 'VD, Renable AB',
    logo: leifLogo,
  },
  {
    id: 2,
    review_en:
      '"We are growing at high pace - and we found a private office that really suited our needs."',
    review_se:
      '"Vi växer i hög takt - och vi hittade ett privat kontor som verkligen passade våra behov."',
    name: 'Matilda Lundblad',
    position_en: 'CEO at InnovDr AB',
    position_se: 'VD för InnovDr AB',
    logo: matildaLogo,
  },
]

export const persons = [
  {
    id: 1,
    text_en: 'EN-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text_se: 'SE-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Johnny Cage',
    position_en: 'CEO of MK',
    position_se: 'CEO av MK',
    logo: logoPlaceholder,
    image: profile1,
    employee: false,
  },
  {
    id: 2,
    text_en: 'EN-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text_se: 'SE-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Bob Kramer',
    position_en: 'CEO of Lenvovo',
    position_se: 'CEO av Lenvovo',
    logo: logoPlaceholder,
    image: profile3,
    employee: false,
  },
  {
    id: 3,
    text_en: 'EN-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text_se: 'SE-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Mr. Fake',
    position_en: 'Real estate specialist at FlexCost',
    position_se: 'Fastighetsspecialist på FlexCost',
    logo: logoPlaceholder,
    image: profile1,
    employee: true,
  },
  {
    id: 4,
    text_en: 'EN-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text_se: 'SE-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Mr. Fake',
    position_en: 'Chief Editor at Some News',
    position_se: 'Chefredaktör av Some News',
    logo: logoPlaceholder,
    image: profile2,
    employee: false,
  },
  {
    id: 5,
    text_en: 'EN-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text_se: 'SE-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Mr. Fake',
    position_en: 'Real estate specialist at FlexCost',
    position_se: 'Fastighetsspecialist på FlexCost',
    logo: logoPlaceholder,
    image: profile3,
    employee: true,
  },
]
