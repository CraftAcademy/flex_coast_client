import React, { useEffect } from 'react'
import QuestionaryForm from './views/QuestionaryForm'
import './styles/globals.css'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import Footer from './components/Footer'
import ahoy from './modules/analytics'

const App = () => {
  useEffect(() => {
    ahoy.trackView()
  }, [])

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/inquiry'>
          <QuestionaryForm />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
