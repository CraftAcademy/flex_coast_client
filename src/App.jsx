import React, { Suspense, useEffect } from 'react'
import './styles/globals.css'
import ahoy from './modules/analytics'
import LoadingScreen from './views/LoadingScreen'
const LandingPage = React.lazy(() => import('./views/LandingPage'))
const Footer = React.lazy(() => import('./components/Footer'))

const App = () => {
  useEffect(() => {
    ahoy.trackView()
  }, [])

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <LandingPage />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
