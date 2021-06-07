import React from 'react'
import QuestionaryForm from './views/QuestionaryForm'
import './styles/styles.css'
import './styles/globals.css'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage'


const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/inquiry'>
        <Header />
        <QuestionaryForm />
      </Route>
    </Switch>
  )
}

export default App
