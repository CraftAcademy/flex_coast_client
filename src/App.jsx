import React, { useEffect } from 'react'
import './styles/globals.css'
import LandingPage from './views/LandingPage'
import Footer from './components/Footer'
import ahoy from './modules/analytics'
import LoadingScreen from './views/LoadingScreen'

const App = () => {
  useEffect(() => {
    ahoy.trackView()
  }, [])

  return (
    <>
      <LoadingScreen />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
