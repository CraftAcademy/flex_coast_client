import React, {useEffect} from 'react'
import QuestionaryForm from './views/QuestionaryForm'
import './styles/globals.css'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import ahoy from 'ahoy.js';
import Footer from './components/Footer'

const App = () => {

  ahoy.configure({
    urlPrefix: "http://localhost:3000/api",
    visitsUrl: "/ahoy/visits",
    eventsUrl: "/ahoy/events",
  });
  

  useEffect(() => {
    // what are we interested in
    // language, IP address, coordinates, device type, platform
    debugger
    ahoy.track('Site visit'); 
    ahoy.trackClicks();
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
