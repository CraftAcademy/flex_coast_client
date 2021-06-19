import React, { Suspense, useEffect } from 'react'
import './styles/globals.css'
import ahoy from './modules/analytics'
import { useSelector } from 'react-redux'
import LoadingScreen from './views/LoadingScreen'
import CookieConsent from 'react-cookie-consent'
import store from './state/store/configureStore'
const LandingPage = React.lazy(() => import('./views/LandingPage'))
const Footer = React.lazy(() => import('./components/Footer'))

const App = () => {
  const { consent } = useSelector((state) => state)
  useEffect(() => {
    consent && ahoy.trackView()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <LandingPage />
        <Footer />
        <CookieConsent
          location='bottom'
          buttonText='I accept'
          cookieName='flexCoastCookies'
          style={{ background: '#333' }}
          buttonStyle={{
            color: '#4e503b',
            fontSize: '13px',
            backgroundColor: 'lightgreen',
          }}
          expires={150}
          onAccept={() => {
            store.dispatch({
              type: 'ACCEPT_COOKIES',
            })
          }}
          enableDeclineButton>
          <span style={{ fontSize: '16px' }}>
            This website uses cookies to enhance the user experience.
          </span>
        </CookieConsent>
      </Suspense>
    </>
  )
}

export default App
