import React, { useEffect, useState } from 'react'
import './custom.scss'
import { Switch, Route} from 'react-router-dom'
// import tampaBay1 from './pictures/tampa 1.jpg'
// import tampaBay2 from './pictures/tampa 2.jpg'
// import tampaBay3 from './pictures/tampa 3.jpeg'
import { Homepage } from './pages/Homepage'
import { EventNew } from './pages/EventNew'
import { OneEvent } from './pages/OneEvent'
import {SignUp} from './pages/SignUp'
import { SignOn } from './pages/SignOn'
import {isLoggedIn, logout} from './auth'

function handleLogout() {
  logout()

  window.location.assign('/')
}
export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <EventNew />
      </Route>
      <Route exact path="/events/:id">
        <OneEvent/>
      </Route>
      <Route exact path="/signup">
      <SignUp/>
         </Route>
         <Route exact path="/signin">
      <SignOn/>
         </Route> 
    </Switch>
  )
}
