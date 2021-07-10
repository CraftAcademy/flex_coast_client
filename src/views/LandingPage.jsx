import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import TestimonialsSection from '../components/TestimonialsSection'
import MapSection from '../components/MapSection'
// import PersonsSection from '../components/PersonsSection'
import FantasticOffer from '../components/FantasticOffer'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <FantasticOffer />
      {/* <PersonsSection /> */}
      <MapSection />
    </>
  )
}

export default LandingPage
