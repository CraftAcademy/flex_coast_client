import React from 'react'
import QuestionaryForm from './views/QuestionaryForm'
import './styles/questionnaire.css'
import './styles/globals.css'
import './styles/landingPage.css'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import Footer from './components/Footer'

const App = () => {
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
